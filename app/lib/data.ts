import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { unstable_noStore as noStore } from 'next/cache';
import { NextResponse } from 'next/server';
import { createClient } from "@/utils/supabase/server";


interface fileResponseObject {
    name: string,
    id: string,
    updated_at: string,
    created_at: string,
    last_accessed_at: string,
    metadata: metadataObject,
}
interface normalizeRecordingsObject {
    createdOn: string, //assigned from audio recording
    direction: string,
    toPhoneNumber: string,
    fromPhoneNumber: string,
    recordingUrl: string,
    callLength: metadataObject,
    cost: number,
    status: string,
    pathWayLogs: string,
    transcript: string,
    variables: string,
    callId: string, //assigned from audio recording

}

interface metadataObject {
    eTag: string,
    size: number,
    mimetype: string,
    cacheControl: string,
    lastModified: string,
    contentLength: number,
    httpStatusCode: number    
}

const supabase = createClient()

export const fetchRecordings = async () : fileResponseObject => {

    noStore()
    
    const { data, error } = await supabase
    .storage
    .from('leaping-audio-tech-interview')
    .list()

    return data
}

export const getFileUrls = async (bucket: string, path: string) : string => {

    noStore()
    
    const { data, error } = await supabase
    .storage
    .from(bucket)
    .getPublicUrl(path)
    
    const { publicUrl } = data
    return publicUrl
}

export const getRecordingsNormalized = async () : normalizeRecordingsObject => {
    const recordings = await fetchRecordings()
    const fileUrls = await Promise.all(
        recordings.map(async recording =>{
            const url = await getFileUrls('leaping-audio-tech-interview', recording.name)
            return {...recording, url}
        })
    )
    const filesObj: normalizeRecordingsObject | null = {}
    
    const normalizeCalls = fileUrls.map(file=>{
        if(file.metadata.mimetype.includes('audio/')){
            const fileIndex: string = file.name.split('.')[0].split("").pop()
            const toPhone: string = '+61 ' + Math.random().toString().split('.')[1].slice(0,9)
            const fromPhone: string = '+61 ' + Math.random().toString().split('.')[1].slice(0,9)
            if(!filesObj[fileIndex]){
                filesObj[fileIndex] = {
                    callIndex: fileIndex,
                    createdOn: file.created_at,
                    callId: file.id,
                    toPhoneNumber: toPhone,
                    fromPhoneNumber: fromPhone,
                    recordingUrl: file.url,
                    status: 'completed',
                    pathWayLogs: 'view',
                    variables: 'view',
                    cost: 0,
                    callLength: file.metadata.size,
                    summary: 'N/A',
                }
            }else{
                filesObj[fileIndex] = {
                    ...filesObj[fileIndex], 
                    createdOn: file.created_at,
                    callId: file.id,
                    toPhoneNumber: toPhone,
                    fromPhoneNumber: fromPhone,
                    recordingUrl: file.url,
                    status: 'completed',
                    pathWayLogs: 'view',
                    variables: 'view'
                }
            }
        }
        if(file.metadata.mimetype.includes('text/')){
            const fileIndex = file.name.split('.')[0].split("").pop()
            if(!filesObj[fileIndex]){
                filesObj[fileIndex] = {
                    callIndex: fileIndex,
                    transcript: file.url,
                    cost: 0,
                    callLength: file.metadata.size,
                    summary: 'N/A',
                }
            }else{
                filesObj[fileIndex] = {
                    ...filesObj[fileIndex],
                    transcript: file.url 
                }
            }
            
        }
    })
    
	console.log("TCL: Object.values(filesObj)", Object.values(filesObj))
    return Object.values(filesObj)
}


export const downloadBlobFileByName = async (name) => {
    const {data: blob} = await supabase
    .storage
    .from('leaping-audio-tech-interview')
    .download(name)
}

