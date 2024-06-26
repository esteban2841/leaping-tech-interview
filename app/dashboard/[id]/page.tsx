import { recordingsObject} from '@/utils/types/index'
import { getRecordingsNormalized, classifyCalls, getCallById } from '../../lib/data'
import axios from 'axios';
import { createClient } from "@/utils/supabase/server";
import AudioPlayer from '@/components/molecules/AudioPlayer';
import PhoneIcon from '@mui/icons-material/Phone';
import Link from 'next/link.js';
import CallPropDisplayer from '@/components/atoms/CallPropDisplayer';
const page = async ({params}: {params : {id: string}}) => {
    const {id} = params

    const recordings : Array<recordingsObject> = await getRecordingsNormalized(createClient)
    const fetchingContent = await Promise.all(recordings.map(async recording => {
        const data = await axios.get(recording.transcript!)
        recording.transcript = await data.data
        return {
            ...recording
        }
    }))
    const clasifiedCalls: Array<recordingsObject> = classifyCalls(fetchingContent)
    const callDetail: recordingsObject = getCallById(clasifiedCalls, id)

    return (
        <div className='flex bg-neutral-900 w-full sm:h-screen box-border text-white align-center justify-center'>
            <div className='w-full max-w-6xl mx-2 flex flex-col sm:flex-row items-center justify-center gap-6 sm:h-full box-border'>
                <div className='relative flex flex-col overflow-scroll gap-6 w-full scrollbar-hide rounded-md my-8 mx-4 sm:h-[95%] sm:w-2/3 p-4 border-2 border-solid box-border bg-[#141617] border-[#1F2122]'>
                    <Link 
                        href='/dashboard'
                        className="absolute right-4 rounded-md text-[#fff] hover:text-[#141617] bg-[#747676] py-3 px-4 hover:bg-btn-background-hover">
                        Calls Dashboard
                    </Link>
                    <AudioPlayer callDetail={callDetail}/>
                    <CallPropDisplayer title={'Logs'} content={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse veritatis ducimus dolore provident temporibus'}/>
                    <CallPropDisplayer title={'Summary'} content={callDetail.summary|| ''}/>
                    <CallPropDisplayer title={'Transcript'} content={callDetail.transcript?.replace('/n', '/n /n')|| ''}/>
                </div>
                <div className='flex flex-col gap-6 overflow-scroll scrollbar-hide w-full flex flex-column rounded-md my-8 mx-4 sm:h-[95%] sm:w-1/3 p-4 border-2 border-solid box-border bg-[#141617] border-[#1F2122]'>
                    <div className='' >
                        <button className='flex hover:bg-btn-background-hover align-center text-[#fff] hover:text-[#141617] justify-center rounded-md bg-[#747676] py-3 px-4 gap-2'>
                            <PhoneIcon/>
                            Resume Call
                        </button>
                    </div>
                    <CallPropDisplayer title={'Call Id'} content={callDetail.callId|| ''}/>
                    <div className='text-sm flex gap-3 flex-col p-4 border-t-2 border-solid box-border bg-[#141617] border-[#1F2122]'>
                        <h1 className='text-lg'>
                            Cost
                        </h1>
                        <p className='font-light text-[#747676] text-sm leading-6 text-justify '>
                            STT: $0.02 ($0.01 / min)
                        </p>
                        <p className='font-light text-[#747676] text-sm leading-6 text-justify '>
                            LLM: $0.02 ($0.01 / min)
                            - 3905 prompt tokens
                            - 324 complection tokens
                        </p>
                        <p className='font-light text-[#747676] text-sm leading-6 text-justify '>
                            TTS: $0.02 ($0.01 / min)
                            - 1403 characters
                        </p>
                        <p className='font-light text-[#747676] text-sm leading-6 text-justify '>
                            Vapi: $0.10 ($0.05 / min)
                        </p>
                        <p className='font-light text-[#747676] text-sm leading-6 text-justify '>
                            Transport: $0.00 ($0.00 / min)
                        </p>
                        <p className='font-light text-[#747676] text-sm leading-6 text-justify '>
                            Total: $0.17 ($0.08 / min)
                        </p>
                    </div>
                    <div className='text-sm flex gap-3 flex-col p-4 border-t-2 border-solid box-border bg-[#141617] border-[#1F2122]'>
                        <h1 className='text-lg'>
                            Ended Reason
                        </h1>
                        <p className='font-light text-[#747676] text-sm leading-6 text-justify '>
                            phone-call-provider.closed-websocket
                        </p>
                    </div>
                    <div className='text-sm flex gap-3 flex-col p-4 border-t-2 border-solid box-border bg-[#141617] border-[#1F2122]'>
                        <h1 className='text-lg'>
                            Metadata
                        </h1>
                        <p className='font-light text-[#747676] text-sm leading-6 text-justify '>
                            Red wine
                        </p>
                        <p className='font-light text-[#747676] text-sm leading-6 text-justify '>
                            Malbec
                        </p>
                        <p className='font-light text-[#747676] text-sm leading-6 text-justify '>
                            Cabernet Sauvignon
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page