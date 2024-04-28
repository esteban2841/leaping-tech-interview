'use client'
import { SVGProps } from "react";
import styled from "styled-components";
import { CustonListItemIcon } from "./CustonListItemIcon";

const StyledMain = styled.main`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
`;

const MainLayout = styled.div`
  font-size: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  gap: 20px;
  .svg-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
  }
 
`;

const CustomSVG = styled.svg`
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  `;
const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;


interface Props extends SVGProps<SVGSVGElement> {
  width?: number,
  height?: number,
  viewBox?: string,
}

const LeapingImage = (props: Props) => {
  console.log("TCL: props", props.viewBox)
  return <StyledMain>
    <MainLayout>
      <h1>Leaping AI dashboard</h1>
      <h3>Advantages of having a calls dashboard</h3>
      <StyledUl>
        <StyledLi>
          <CustonListItemIcon/>
          <p>Data Analitics easier to explore</p>
        </StyledLi>
        <StyledLi>
          <CustonListItemIcon/>
          <p>Data Analitics easier to explore</p>
        </StyledLi>
        <StyledLi>
          <CustonListItemIcon/>
          <p>Data Analitics easier to explore</p>
        </StyledLi>
      </StyledUl>
    </MainLayout>
    <MainLayout>
      <div className="svg-container">
        <CustomSVG
          width={634}
          height={412}
          viewBox="0 0 634 412"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#clip0_269_2)">
            <path
              d="M618.132 251.318H595.869C595.393 251.319 594.924 251.213 594.495 251.006C594.067 250.8 593.691 250.499 593.395 250.127C593.103 249.764 592.897 249.339 592.792 248.885C592.687 248.431 592.687 247.959 592.791 247.505C594.882 238.276 594.781 228.685 592.497 219.502C592.32 218.8 592.393 218.058 592.702 217.403C593.011 216.748 593.538 216.22 594.192 215.91C603.492 211.558 612.031 211.671 619.572 216.246C619.968 216.483 620.307 216.803 620.566 217.184C620.825 217.565 620.998 217.998 621.073 218.453C622.671 228.437 622.733 238.606 621.255 248.609C621.15 249.361 620.776 250.051 620.202 250.549C619.628 251.047 618.892 251.321 618.132 251.318Z"
              fill="#63A5FF"
            />
            <path
              d="M617.794 236.734H600.772C600.349 236.734 599.942 236.566 599.643 236.266C599.344 235.967 599.175 235.561 599.175 235.137C599.175 234.714 599.344 234.308 599.643 234.008C599.942 233.709 600.349 233.541 600.772 233.541H617.794C618.218 233.541 618.624 233.709 618.923 234.008C619.223 234.308 619.391 234.714 619.391 235.137C619.391 235.561 619.223 235.967 618.923 236.266C618.624 236.566 618.218 236.734 617.794 236.734ZM617.794 231.134H600.772C600.349 231.134 599.942 230.966 599.643 230.666C599.344 230.367 599.175 229.961 599.175 229.537C599.175 229.114 599.344 228.708 599.643 228.408C599.942 228.109 600.349 227.941 600.772 227.941H617.794C618.218 227.941 618.624 228.109 618.923 228.408C619.223 228.708 619.391 229.114 619.391 229.537C619.391 229.961 619.223 230.367 618.923 230.666C618.624 230.966 618.218 231.134 617.794 231.134Z"
              fill="white"
            />
            <path
              d="M172.305 249.087C237.641 249.087 290.606 196.122 290.606 130.787C290.606 65.4519 237.641 12.4873 172.305 12.4873C106.969 12.4873 54.0039 65.4519 54.0039 130.787C54.0039 196.122 106.969 249.087 172.305 249.087Z"
              fill="#F2F2F2"
            />
            <path
              d="M309.506 245.587C321.877 245.587 331.906 235.558 331.906 223.187C331.906 210.816 321.877 200.787 309.506 200.787C297.135 200.787 287.106 210.816 287.106 223.187C287.106 235.558 297.135 245.587 309.506 245.587Z"
              fill="#F2F2F2"
            />
            <path
              d="M422.208 295.987C427.233 295.987 431.308 291.913 431.308 286.887C431.308 281.861 427.233 277.787 422.208 277.787C417.182 277.787 413.107 281.861 413.107 286.887C413.107 291.913 417.182 295.987 422.208 295.987Z"
              fill="#F2F2F2"
            />
            <path
              d="M492.47 322.678C488.632 293.354 470.259 264.555 442.209 255.183C453.44 285.32 453.65 318.457 442.801 348.734C438.574 360.394 432.659 372.924 436.78 384.623C439.344 391.903 445.537 397.445 452.443 400.891C459.348 404.337 466.998 405.952 474.553 407.534L476.045 408.752C487.847 381.634 496.307 352.003 492.47 322.678Z"
              fill="#F2F2F2"
            />
            <path
              d="M441.934 255.74C458.351 273.899 468.628 296.768 471.307 321.101C471.849 326.317 471.945 331.655 470.838 336.808C469.719 341.822 467.277 346.444 463.767 350.195C460.566 353.758 456.878 357.033 454.598 361.313C452.195 365.824 452.134 370.932 453.83 375.697C455.904 381.527 459.95 386.263 464.067 390.758C468.638 395.748 473.465 400.859 475.437 407.5C475.676 408.305 476.911 407.887 476.672 407.084C473.241 395.528 461.961 389.024 456.534 378.631C454.002 373.781 452.917 368.139 455.228 362.988C457.25 358.483 461.049 355.104 464.323 351.524C467.76 347.765 470.387 343.648 471.722 338.691C473.089 333.621 473.201 328.267 472.795 323.06C471.785 311.258 468.926 299.689 464.323 288.775C459.138 276.291 451.855 264.786 442.79 254.757C442.229 254.136 441.376 255.124 441.934 255.74Z"
              fill="white"
            />
            <path
              d="M470.906 313.214C474.927 312.211 478.461 309.811 480.876 306.442C483.291 303.074 484.43 298.956 484.089 294.825C484.017 293.99 482.716 294.062 482.787 294.899C483.111 298.745 482.05 302.58 479.795 305.712C477.54 308.844 474.239 311.067 470.489 311.979C469.674 312.178 470.096 313.413 470.906 313.214ZM465.63 348.602C458.328 344.305 452.913 337.414 450.466 329.303C450.224 328.498 448.989 328.916 449.231 329.719C451.793 338.156 457.442 345.316 465.051 349.77C465.777 350.194 466.352 349.024 465.63 348.602ZM457.937 277.533C456.461 278.246 454.832 278.581 453.196 278.508C451.559 278.436 449.966 277.958 448.56 277.118C447.84 276.685 447.266 277.855 447.981 278.286C449.539 279.207 451.299 279.733 453.107 279.817C454.915 279.901 456.716 279.541 458.353 278.769C458.513 278.709 458.645 278.59 458.721 278.437C458.797 278.283 458.811 278.107 458.762 277.943C458.706 277.78 458.588 277.645 458.433 277.568C458.278 277.492 458.1 277.479 457.936 277.533H457.937Z"
              fill="white"
            />
            <path
              d="M357.229 308.148C357.67 308.431 358.113 308.715 358.555 309.009C364.475 312.847 370.072 317.16 375.293 321.905C375.703 322.266 376.112 322.637 376.51 323.008C388.967 334.574 399.168 348.352 406.595 363.641C409.544 369.728 412.027 376.03 414.02 382.493C416.773 391.42 419.048 401.316 424.429 408.598C424.983 409.364 425.583 410.095 426.226 410.787L474.443 410.479C474.552 410.423 474.662 410.378 474.772 410.322L476.697 410.398C476.618 410.057 476.528 409.706 476.448 409.366C476.403 409.168 476.347 408.97 476.301 408.772C476.268 408.64 476.234 408.509 476.211 408.388C476.201 408.347 476.19 408.307 476.177 408.267C476.155 408.146 476.121 408.036 476.098 407.926C475.602 405.96 475.09 403.995 474.565 402.029C474.565 402.018 474.565 402.018 474.553 402.007C470.507 387.038 465.177 372.276 457.775 358.791C457.552 358.385 457.33 357.97 457.085 357.564C453.714 351.504 449.855 345.731 445.544 340.3C443.174 337.334 440.655 334.49 437.998 331.779C431.117 324.786 423.18 318.919 414.476 314.393C397.124 305.373 377.08 302.003 358.634 307.699C358.165 307.844 357.696 307.993 357.229 308.148Z"
              fill="#F2F2F2"
            />
            <path
              d="M357.341 308.759C381.382 313.374 403.357 325.446 420.146 343.262C423.719 347.1 427.01 351.305 429.228 356.086C431.353 360.762 432.187 365.923 431.643 371.031C431.232 375.805 430.259 380.639 431.015 385.429C431.813 390.477 434.84 394.593 439.063 397.377C444.229 400.782 450.31 402.128 456.304 403.238C462.958 404.47 469.889 405.645 475.463 409.76C476.138 410.259 476.872 409.182 476.198 408.684C466.501 401.523 453.578 403.122 442.988 398.091C438.046 395.743 433.783 391.892 432.527 386.387C431.428 381.573 432.429 376.587 432.886 371.758C433.367 366.687 432.986 361.818 431.069 357.057C429.106 352.186 425.973 347.843 422.513 343.93C414.602 335.115 405.353 327.599 395.107 321.657C383.451 314.811 370.709 310.009 357.433 307.459C356.611 307.301 356.525 308.603 357.342 308.759H357.341Z"
              fill="white"
            />
            <path
              d="M415.078 337.207C417.684 333.984 419.06 329.94 418.96 325.797C418.86 321.653 417.291 317.68 414.532 314.587C413.972 313.963 412.976 314.804 413.537 315.429C416.111 318.305 417.573 322.006 417.658 325.864C417.743 329.723 416.446 333.485 414.001 336.471C413.471 337.121 414.55 337.853 415.078 337.207ZM432.17 368.639C423.753 369.604 415.281 367.362 408.443 362.358C407.766 361.862 407.032 362.939 407.708 363.434C414.833 368.628 423.654 370.944 432.411 369.92C433.246 369.822 433.001 368.541 432.171 368.639H432.17ZM383.239 316.526C382.491 317.983 381.392 319.231 380.041 320.159C378.691 321.086 377.132 321.663 375.503 321.839C374.667 321.927 374.913 323.207 375.744 323.12C377.542 322.918 379.264 322.278 380.758 321.256C382.253 320.235 383.474 318.863 384.316 317.261C384.408 317.117 384.441 316.943 384.409 316.775C384.378 316.607 384.283 316.457 384.145 316.356C384.002 316.259 383.827 316.223 383.657 316.255C383.488 316.287 383.338 316.384 383.239 316.526Z"
              fill="white"
            />
            <path
              d="M588.488 208.075L581.968 144.96L580.247 118.984L598.498 115.684C598.498 115.684 601.231 133.541 603.622 144.02C605.981 154.362 600.479 206.689 600.333 208.068C601.673 209.267 602.618 210.844 603.043 212.591C603.467 214.339 603.351 216.173 602.71 217.853C602.069 219.533 600.933 220.979 599.452 221.999C597.972 223.019 596.216 223.566 594.418 223.567C592.62 223.568 590.864 223.023 589.383 222.004C587.901 220.985 586.764 219.54 586.121 217.861C585.478 216.182 585.361 214.347 585.784 212.599C586.206 210.852 587.15 209.274 588.489 208.074L588.488 208.075Z"
              fill="#FFB8B8"
            />
            <path
              d="M513.908 401.864H504.623L500.206 366.052L513.909 366.052L513.908 401.864Z"
              fill="#FFB6B6"
            />
            <path
              d="M516.276 410.864L486.338 410.863V410.484C486.339 407.394 487.566 404.43 489.751 402.245C491.937 400.06 494.9 398.832 497.991 398.832L503.46 394.683L513.663 398.833H516.276L516.276 410.864Z"
              fill="#2F2E41"
            />
            <path
              d="M595.737 401.864H586.453L582.036 366.052L595.739 366.052L595.737 401.864Z"
              fill="#FFB6B6"
            />
            <path
              d="M598.105 410.864L568.167 410.863V410.484C568.167 407.394 569.395 404.43 571.58 402.245C573.766 400.06 576.73 398.832 579.82 398.832L585.289 394.683L595.492 398.833H598.106L598.105 410.864ZM581.616 210.196L589.425 284.382C589.425 284.382 599.82 358.665 597.868 368.914C595.917 379.163 598.356 380.628 598.356 380.628L580.543 379.359C580.543 379.359 581.03 373.014 578.102 370.086C575.174 367.158 576.638 358.372 576.638 358.372L542.082 237.528L521.094 300.977C521.094 300.977 517.678 370.771 517.19 371.747C516.701 372.723 515.238 385.901 515.238 385.901H497.179C497.179 385.901 499.62 378.092 496.204 375.652C492.788 373.211 489.859 375.164 492.788 370.771C495.716 366.379 496.692 361.01 495.716 358.569C494.74 356.129 494.739 346.368 494.739 346.368C494.739 346.368 496.204 214.589 504.501 210.197C512.798 205.805 581.616 210.197 581.616 210.197L581.616 210.196Z"
              fill="#2F2E41"
            />
            <path
              d="M544.633 59.9885C555.241 59.9885 563.84 51.3891 563.84 40.7812C563.84 30.1734 555.241 21.574 544.633 21.574C534.025 21.574 525.425 30.1734 525.425 40.7812C525.425 51.3891 534.025 59.9885 544.633 59.9885Z"
              fill="#FFB8B8"
            />
            <path
              d="M601.575 125.753L582.685 132.527L576.931 134.589L572.732 80.95L587.144 88.5939C587.168 88.6117 587.189 88.6329 587.207 88.6569C589.703 91.4138 591.792 94.5135 593.411 97.8619C601.315 113.929 601.575 125.753 601.575 125.753Z"
              fill="#3F3D56"
            />
            <path
              d="M471.44 203.543C471.44 203.543 490.64 143.89 490.976 143.175C493.49 124.078 500.723 115.655 501.807 116.57L520.475 123.036C520.475 123.036 514.922 140.62 511.163 151.064C507.57 161.043 482.968 207.12 482.277 208.323C483.019 209.961 483.246 211.786 482.928 213.555C482.61 215.325 481.763 216.957 480.498 218.235C479.233 219.512 477.609 220.376 475.843 220.711C474.076 221.046 472.249 220.837 470.604 220.111C468.959 219.385 467.573 218.177 466.629 216.646C465.686 215.116 465.229 213.335 465.32 211.539C465.411 209.743 466.044 208.017 467.137 206.589C468.23 205.162 469.731 204.099 471.441 203.543H471.44Z"
              fill="#FFB8B8"
            />
            <path
              d="M529.443 84.4045C529.443 84.4045 513.28 76.4833 507.012 92.0415C502.906 102.533 500.962 107.11 498.221 118.037C498.221 118.037 514.696 120.508 519.979 129.818L529.443 84.4045Z"
              fill="#3F3D56"
            />
            <path
              d="M588.254 218.282C551.056 225.964 501.762 212.757 501.762 212.757L514.912 155.756L510.236 96.1043C509.666 88.8096 513.821 81.9713 520.284 79.5486L529.209 76.2054L536.588 65.6438L557.66 66.3354L566.084 77.4234L572.732 80.95L587.143 88.594L587.206 88.6255V88.657L582.684 132.527L579.956 158.979C579.956 158.979 588.241 188.729 586.541 192.674C584.841 196.614 586.319 194.711 586.731 196.817C587.144 198.922 588.405 199.056 588.596 203.204C588.793 207.347 588.254 218.282 588.254 218.282Z"
              fill="#3F3D56"
            />
            <path
              d="M565.469 33.9414C563.951 32.4435 566.236 28.4801 565.805 26.392C565.309 23.998 562.672 23.928 562.043 21.5655C561.365 19.0245 558.658 17.6406 556.154 16.8356C549.737 14.782 542.889 14.4682 536.311 15.9263C533.4 16.6372 530.533 17.5203 527.727 18.5709C525.789 19.2527 527.657 17.3977 525.72 18.0795C524.986 18.243 524.339 18.6724 523.903 19.2849C523.555 19.9429 524.025 20.9964 524.757 20.8627L517.662 23.9917L521.642 28.1609C519.756 27.6247 517.745 29.8731 518.489 31.6875C518.788 32.26 519.222 32.7513 519.753 33.119C520.284 33.4866 520.897 33.7197 521.538 33.7979C523.669 34.213 522.053 36.2409 524.223 36.201C526.394 36.1611 541.527 31.7127 542.582 33.6096C543.333 34.9606 543.25 36.7498 544.323 37.8628C545.695 39.2859 548.092 38.7658 549.839 37.8383C551.586 36.9115 553.358 35.6375 555.322 35.8601C557.373 36.0918 558.925 39.883 559.431 41.885C559.936 43.887 559.617 45.9933 559.295 48.0324C558.873 50.7113 554.645 53.3895 554.222 56.0684C558.915 57.3655 563.949 53.2369 565.804 46.0556C565.62 41.5168 568.703 37.132 565.468 33.9414H565.469Z"
              fill="#2F2E41"
            />
            <path
              d="M266.875 283.39C210.333 283.393 161.138 241.214 153.87 183.684L155.259 183.509C162.437 240.328 211.033 281.987 266.877 281.99C271.621 281.99 276.361 281.691 281.068 281.094C342.659 273.314 386.436 216.877 378.656 155.287L380.044 155.112C387.922 217.467 343.6 274.607 281.243 282.484C276.478 283.087 271.679 283.39 266.875 283.39Z"
              fill="#3F3D56"
            />
            <path
              d="M269.912 306.804H247.648C247.172 306.805 246.703 306.698 246.274 306.492C245.845 306.285 245.469 305.984 245.173 305.612C244.882 305.249 244.676 304.824 244.571 304.37C244.467 303.916 244.466 303.444 244.57 302.99C246.683 293.667 246.558 283.976 244.206 274.71C244.045 274.07 244.091 273.395 244.336 272.783C244.581 272.17 245.013 271.65 245.571 271.298C253.273 266.527 261.66 266.676 271.212 271.754C271.646 271.983 272.021 272.309 272.309 272.706C272.596 273.104 272.788 273.563 272.869 274.047C274.451 283.996 274.506 294.128 273.033 304.094C272.928 304.847 272.554 305.536 271.98 306.034C271.406 306.533 270.672 306.806 269.912 306.804Z"
              fill="#63A5FF"
            />
            <path
              d="M168.411 187.804H146.147C145.671 187.805 145.202 187.699 144.773 187.492C144.345 187.286 143.968 186.985 143.673 186.612C143.381 186.249 143.175 185.825 143.07 185.371C142.966 184.917 142.965 184.445 143.069 183.991C145.189 174.635 145.056 164.909 142.68 155.615C142.53 155.003 142.566 154.36 142.784 153.769C143.003 153.178 143.393 152.666 143.905 152.298C155.352 144.065 164.368 144.304 170.701 153.01C170.986 153.407 171.176 153.865 171.254 154.347C172.946 164.519 173.04 174.893 171.532 185.094C171.427 185.847 171.053 186.537 170.479 187.035C169.905 187.533 169.17 187.806 168.41 187.804H168.411Z"
              fill="#CCCCCC"
            />
            <path
              d="M259.51 285.91H251.851C251.428 285.91 251.022 285.741 250.722 285.442C250.423 285.142 250.255 284.736 250.255 284.313C250.255 283.889 250.423 283.483 250.722 283.184C251.022 282.884 251.428 282.716 251.851 282.716H259.51C259.933 282.716 260.339 282.884 260.639 283.184C260.938 283.483 261.106 283.889 261.106 284.313C261.106 284.736 260.938 285.142 260.639 285.442C260.339 285.741 259.933 285.91 259.51 285.91ZM268.874 292.219H251.851C251.427 292.219 251.021 292.051 250.721 291.752C250.422 291.452 250.254 291.046 250.254 290.622C250.254 290.199 250.422 289.793 250.721 289.493C251.021 289.194 251.427 289.025 251.851 289.025H268.874C269.297 289.025 269.703 289.194 270.003 289.493C270.302 289.793 270.471 290.199 270.471 290.622C270.471 291.046 270.302 291.452 270.003 291.752C269.703 292.051 269.297 292.219 268.874 292.219ZM161.509 165.51H153.851C153.427 165.51 153.021 165.342 152.722 165.042C152.422 164.743 152.254 164.337 152.254 163.913C152.254 163.49 152.422 163.084 152.722 162.784C153.021 162.485 153.427 162.316 153.851 162.316H161.509C161.932 162.316 162.338 162.485 162.638 162.784C162.937 163.084 163.105 163.49 163.105 163.913C163.105 164.337 162.937 164.743 162.638 165.042C162.338 165.342 161.932 165.51 161.509 165.51ZM161.509 171.11H153.851C153.427 171.11 153.021 170.942 152.722 170.642C152.422 170.343 152.254 169.937 152.254 169.513C152.254 169.09 152.422 168.683 152.722 168.384C153.021 168.085 153.427 167.916 153.851 167.916H161.509C161.932 167.916 162.338 168.085 162.638 168.384C162.937 168.683 163.105 169.09 163.105 169.513C163.105 169.937 162.937 170.343 162.638 170.642C162.338 170.942 161.932 171.11 161.509 171.11ZM161.509 176.71H153.851C153.427 176.71 153.021 176.542 152.722 176.242C152.422 175.943 152.254 175.537 152.254 175.113C152.254 174.69 152.422 174.283 152.722 173.984C153.021 173.685 153.427 173.516 153.851 173.516H161.509C161.932 173.516 162.338 173.685 162.638 173.984C162.937 174.283 163.105 174.69 163.105 175.113C163.105 175.537 162.937 175.943 162.638 176.242C162.338 176.542 161.932 176.71 161.509 176.71Z"
              fill="white"
            />
            <path
              d="M468.042 214.105H396.876C394.969 214.103 393.141 213.344 391.792 211.996C390.444 210.647 389.685 208.818 389.683 206.911V163.08C389.685 161.173 390.444 159.345 391.792 157.996C393.141 156.648 394.969 155.889 396.876 155.887H468.042C469.95 155.889 471.778 156.647 473.127 157.996C474.476 159.345 475.234 161.173 475.236 163.08V206.911C475.234 208.819 474.476 210.647 473.127 211.996C471.778 213.345 469.95 214.103 468.042 214.105Z"
              fill="#E6E6E6"
            />
            <path
              d="M439.767 208.46H401.879C400.093 208.458 398.38 207.747 397.117 206.484C395.854 205.221 395.144 203.508 395.142 201.722V168.269C395.144 166.483 395.854 164.771 397.118 163.508C398.381 162.245 400.093 161.535 401.879 161.532H463.04C464.826 161.534 466.539 162.245 467.802 163.508C469.065 164.771 469.776 166.483 469.778 168.269V178.45C469.768 186.406 466.604 194.034 460.977 199.66C455.351 205.286 447.723 208.451 439.767 208.46Z"
              fill="white"
            />
            <path
              d="M456.939 179.851H407.98C407.557 179.851 407.151 179.682 406.851 179.383C406.552 179.084 406.384 178.677 406.384 178.254C406.384 177.83 406.552 177.424 406.851 177.125C407.151 176.825 407.557 176.657 407.98 176.657H456.939C457.362 176.657 457.769 176.825 458.068 177.125C458.367 177.424 458.536 177.83 458.536 178.254C458.536 178.677 458.367 179.084 458.068 179.383C457.769 179.682 457.362 179.851 456.939 179.851ZM415.639 186.16H407.98C407.557 186.16 407.151 185.991 406.851 185.692C406.552 185.393 406.384 184.986 406.384 184.563C406.384 184.14 406.552 183.733 406.851 183.434C407.151 183.135 407.557 182.966 407.98 182.966H415.639C416.062 182.966 416.468 183.135 416.768 183.434C417.067 183.733 417.235 184.14 417.235 184.563C417.235 184.986 417.067 185.393 416.768 185.692C416.468 185.991 416.062 186.16 415.639 186.16ZM429.203 192.469H407.98C407.557 192.469 407.151 192.301 406.851 192.001C406.552 191.702 406.384 191.296 406.384 190.872C406.384 190.449 406.552 190.043 406.851 189.743C407.151 189.444 407.557 189.275 407.98 189.275H429.203C429.626 189.275 430.032 189.444 430.332 189.743C430.631 190.043 430.799 190.449 430.799 190.872C430.799 191.296 430.631 191.702 430.332 192.001C430.032 192.301 429.626 192.469 429.203 192.469Z"
              fill="#63A5FF"
            />
            <path
              d="M387.199 170.068C395.514 170.068 402.254 163.328 402.254 155.013C402.254 146.699 395.514 139.959 387.199 139.959C378.885 139.959 372.145 146.699 372.145 155.013C372.145 163.328 378.885 170.068 387.199 170.068Z"
              fill="#3F3D56"
            />
            <path
              d="M216.783 40.4949C217.765 35.4231 219.739 30.595 222.591 26.2875C225.443 21.98 229.118 18.2778 233.403 15.393C237.689 12.5082 242.502 10.4976 247.566 9.47648C252.631 8.45534 257.847 8.44373 262.915 9.44231C267.984 10.4409 272.806 12.43 277.105 15.2957C281.403 18.1614 285.094 21.8472 287.965 26.142C290.836 30.4368 292.832 35.256 293.837 40.3234C294.842 45.3908 294.837 50.6068 293.823 55.6723L292.448 55.4021C293.41 50.5241 293.4 45.5045 292.422 40.6301C291.443 35.7556 289.513 31.1216 286.744 26.9928C283.974 22.8639 280.418 19.321 276.279 16.5664C272.14 13.8117 267.499 11.8992 262.621 10.9382C257.743 9.97709 252.724 9.98622 247.849 10.965C242.975 11.9438 238.34 13.8732 234.212 16.6429C225.873 22.2365 220.098 30.9135 218.157 40.7651L216.783 40.4949Z"
              fill="#3F3D56"
            />
            <path
              d="M231.691 65.2637L209.447 66.1849C208.972 66.2056 208.498 66.1184 208.062 65.9299C207.625 65.7414 207.237 65.4564 206.926 65.0964C206.619 64.7457 206.395 64.3301 206.272 63.8807C206.149 63.4312 206.129 62.9597 206.214 62.5015C207.921 53.1939 207.423 43.6159 204.761 34.5352C204.556 33.8406 204.598 33.0963 204.879 32.4291C205.161 31.7619 205.666 31.2131 206.307 30.8763C215.418 26.1429 223.954 25.9028 231.679 30.1623C232.084 30.3822 232.436 30.6878 232.71 31.0578C232.985 31.4277 233.176 31.8531 233.269 32.3043C235.28 42.2133 235.762 52.3717 234.699 62.4266C234.625 63.1833 234.28 63.8878 233.727 64.4094C233.174 64.9311 232.45 65.2346 231.691 65.2637Z"
              fill="#63A5FF"
            />
            <path
              d="M230.75 50.7051L213.742 51.41C213.533 51.4187 213.323 51.3861 213.126 51.3139C212.929 51.2417 212.749 51.1315 212.594 50.9895C212.44 50.8474 212.315 50.6764 212.227 50.4861C212.139 50.2959 212.089 50.0901 212.08 49.8805C212.072 49.671 212.104 49.4618 212.176 49.2649C212.249 49.068 212.359 48.8872 212.501 48.7329C212.643 48.5786 212.814 48.4537 213.004 48.3655C213.194 48.2773 213.4 48.2274 213.61 48.2188L230.618 47.5145C231.039 47.4996 231.45 47.6521 231.759 47.9387C232.069 48.2253 232.252 48.6227 232.27 49.0441C232.287 49.4655 232.137 49.8768 231.852 50.188C231.568 50.4992 231.171 50.6851 230.75 50.7051ZM230.518 45.1101L213.51 45.815C213.301 45.8236 213.092 45.791 212.895 45.7188C212.698 45.6466 212.517 45.5364 212.363 45.3944C212.208 45.2523 212.084 45.0813 211.995 44.891C211.907 44.7008 211.857 44.495 211.849 44.2855C211.84 44.0759 211.873 43.8667 211.945 43.6698C212.017 43.4729 212.127 43.2921 212.269 43.1378C212.411 42.9835 212.582 42.8586 212.772 42.7704C212.963 42.6822 213.169 42.6323 213.378 42.6237L230.386 41.9195C230.808 41.9045 231.218 42.057 231.527 42.3436C231.837 42.6302 232.02 43.0276 232.038 43.449C232.055 43.8704 231.905 44.2817 231.621 44.5929C231.336 44.9041 230.94 45.09 230.518 45.1101Z"
              fill="white"
            />
            <path
              d="M377.263 58.2189H306.097C304.189 58.2169 302.361 57.4583 301.012 56.1096C299.663 54.7609 298.905 52.9323 298.903 51.025V7.19389C298.905 5.28658 299.663 3.45797 301.012 2.10929C302.361 0.760618 304.189 0.00203822 306.097 0L377.263 0C379.17 0.00203822 380.999 0.760618 382.348 2.10929C383.696 3.45797 384.455 5.28658 384.457 7.19389V51.025C384.455 52.9323 383.696 54.7609 382.348 56.1096C380.999 57.4583 379.17 58.2169 377.263 58.2189Z"
              fill="#E6E6E6"
            />
            <path
              d="M348.987 52.5727H311.099C309.313 52.5707 307.6 51.8603 306.337 50.5974C305.074 49.3344 304.364 47.6221 304.361 45.8359V12.383C304.363 10.5967 305.074 8.88421 306.337 7.62112C307.6 6.35804 309.313 5.64755 311.099 5.64551H372.261C374.047 5.64755 375.759 6.35806 377.022 7.62117C378.285 8.88427 378.996 10.5968 378.997 12.383V22.5631C378.988 30.5193 375.824 38.1471 370.198 43.7731C364.572 49.399 356.944 52.5636 348.987 52.5727Z"
              fill="white"
            />
            <path
              d="M366.159 23.9637H317.2C316.777 23.9637 316.371 23.7954 316.071 23.496C315.772 23.1966 315.604 22.7904 315.604 22.367C315.604 21.9435 315.772 21.5374 316.071 21.2379C316.371 20.9385 316.777 20.7703 317.2 20.7703H366.159C366.582 20.7703 366.988 20.9385 367.288 21.2379C367.587 21.5374 367.755 21.9435 367.755 22.367C367.755 22.7904 367.587 23.1966 367.288 23.496C366.988 23.7954 366.582 23.9637 366.159 23.9637H366.159ZM324.859 30.2727H317.2C316.777 30.2727 316.371 30.1045 316.071 29.8051C315.772 29.5056 315.604 29.0995 315.604 28.676C315.604 28.2526 315.772 27.8465 316.071 27.547C316.371 27.2476 316.777 27.0794 317.2 27.0794H324.858C325.282 27.0794 325.688 27.2476 325.987 27.547C326.287 27.8465 326.455 28.2526 326.455 28.676C326.455 29.0995 326.287 29.5056 325.987 29.8051C325.688 30.1045 325.282 30.2727 324.859 30.2727ZM338.423 36.5818H317.2C316.777 36.5818 316.371 36.4136 316.071 36.1142C315.772 35.8147 315.604 35.4086 315.604 34.9851C315.604 34.5617 315.772 34.1555 316.071 33.8561C316.371 33.5567 316.777 33.3884 317.2 33.3884H338.423C338.847 33.3884 339.253 33.5567 339.552 33.8562C339.852 34.1557 340.02 34.5619 340.02 34.9855C340.02 35.4091 339.852 35.8153 339.552 36.1148C339.253 36.4143 338.847 36.5825 338.423 36.5825V36.5818Z"
              fill="#63A5FF"
            />
            <path
              d="M307.362 65.8065C311.751 58.7454 309.585 49.463 302.524 45.0736C295.463 40.6843 286.18 42.8501 281.791 49.9113C277.402 56.9724 279.567 66.2548 286.629 70.6442C293.69 75.0335 302.972 72.8676 307.362 65.8065Z"
              fill="#3F3D56"
            />
            <path
              d="M632.52 411.502H425.689C425.522 411.496 425.364 411.426 425.248 411.306C425.131 411.186 425.066 411.025 425.066 410.858C425.066 410.691 425.131 410.531 425.248 410.41C425.364 410.29 425.522 410.22 425.689 410.215H632.52C632.691 410.215 632.855 410.282 632.975 410.403C633.096 410.524 633.164 410.688 633.164 410.859C633.164 411.029 633.096 411.193 632.975 411.314C632.855 411.435 632.691 411.502 632.52 411.502Z"
              fill="#CCCCCC"
            />
            <path
              d="M94.0305 175.301C87.854 158.973 88.4167 140.86 95.5949 124.947C102.773 109.034 115.979 96.6246 132.307 90.4482C148.635 84.2717 166.748 84.8345 182.661 92.0126C198.574 99.1907 210.984 112.396 217.16 128.724L215.851 129.22C209.806 113.239 197.66 100.314 182.086 93.2889C166.511 86.2634 148.784 85.7125 132.803 91.7575C116.822 97.8025 103.897 109.948 96.8716 125.523C89.846 141.097 89.2951 158.824 95.3402 174.805L94.0305 175.301Z"
              fill="#3F3D56"
            />
            <path
              d="M151.611 110.104H129.347C128.871 110.105 128.402 109.999 127.973 109.792C127.545 109.586 127.168 109.285 126.873 108.912C126.581 108.549 126.375 108.125 126.27 107.671C126.166 107.217 126.165 106.745 126.269 106.291C128.377 96.9888 128.257 87.3206 125.921 78.0737C125.755 77.4193 125.806 76.729 126.066 76.1059C126.325 75.4829 126.78 74.9608 127.361 74.6178C135.425 69.9236 144.037 70.0671 152.957 75.0448C153.379 75.2751 153.743 75.5989 154.022 75.9913C154.3 76.3837 154.485 76.8345 154.562 77.3093C156.15 87.2706 156.207 97.4159 154.732 107.395C154.627 108.147 154.253 108.837 153.679 109.335C153.105 109.833 152.37 110.106 151.61 110.104H151.611Z"
              fill="#63A5FF"
            />
            <path
              d="M141.209 88.51H133.551C133.127 88.51 132.721 88.3418 132.422 88.0424C132.122 87.7429 131.954 87.3368 131.954 86.9134C131.954 86.4899 132.122 86.0838 132.422 85.7843C132.721 85.4849 133.127 85.3167 133.551 85.3167H141.209C141.632 85.3167 142.039 85.4849 142.338 85.7843C142.637 86.0838 142.806 86.4899 142.806 86.9134C142.806 87.3368 142.637 87.7429 142.338 88.0424C142.039 88.3418 141.632 88.51 141.209 88.51ZM150.573 94.8198H133.55C133.127 94.8198 132.72 94.6516 132.421 94.3521C132.121 94.0526 131.953 93.6464 131.953 93.2228C131.953 92.7992 132.121 92.393 132.421 92.0935C132.72 91.794 133.127 91.6257 133.55 91.6257H150.573C150.997 91.6257 151.403 91.794 151.702 92.0935C152.002 92.393 152.17 92.7992 152.17 93.2228C152.17 93.6464 152.002 94.0526 151.702 94.3521C151.403 94.6516 150.997 94.8198 150.573 94.8198Z"
              fill="white"
            />
            <path
              d="M78.3601 174.419H7.19396C5.28663 174.417 3.458 173.658 2.10931 172.309C0.760626 170.961 0.00203824 169.132 0 167.225L0 123.394C0.00203824 121.486 0.760626 119.658 2.10931 118.309C3.458 116.96 5.28663 116.202 7.19396 116.2H78.3601C80.2674 116.202 82.0961 116.96 83.4447 118.309C84.7934 119.658 85.552 121.486 85.5541 123.394V167.225C85.552 169.132 84.7934 170.961 83.4447 172.309C82.0961 173.658 80.2674 174.417 78.3601 174.419Z"
              fill="#E6E6E6"
            />
            <path
              d="M50.0846 168.772H12.1961C10.4099 168.77 8.69746 168.06 7.43438 166.797C6.1713 165.534 5.46072 163.822 5.4585 162.036V128.583C5.46053 126.796 6.17104 125.084 7.43413 123.821C8.69723 122.558 10.4098 121.847 12.1961 121.845H73.3577C75.1439 121.847 76.8564 122.558 78.1194 123.821C79.3824 125.084 80.0927 126.797 80.0946 128.583V138.763C80.0855 146.719 76.9208 154.347 71.2948 159.973C65.6688 165.599 58.0409 168.763 50.0846 168.772Z"
              fill="white"
            />
            <path
              d="M67.2565 140.164H18.2974C17.8739 140.164 17.4678 139.995 17.1683 139.696C16.8689 139.397 16.7007 138.99 16.7007 138.567C16.7007 138.143 16.8689 137.737 17.1683 137.438C17.4678 137.138 17.8739 136.97 18.2974 136.97H67.2558C67.6793 136.97 68.0854 137.138 68.3849 137.438C68.6843 137.737 68.8525 138.143 68.8525 138.567C68.8525 138.99 68.6843 139.397 68.3849 139.696C68.0854 139.995 67.68 140.164 67.2565 140.164ZM25.9562 146.473H18.2974C17.8739 146.473 17.4678 146.304 17.1683 146.005C16.8689 145.706 16.7007 145.299 16.7007 144.876C16.7007 144.453 16.8689 144.046 17.1683 143.747C17.4678 143.448 17.8739 143.279 18.2974 143.279H25.9555C26.3789 143.279 26.7851 143.448 27.0845 143.747C27.384 144.046 27.5522 144.453 27.5522 144.876C27.5522 145.299 27.384 145.706 27.0845 146.005C26.7851 146.304 26.3789 146.473 25.9555 146.473H25.9562ZM39.5202 152.782H18.2974C17.8739 152.782 17.4678 152.614 17.1683 152.314C16.8689 152.015 16.7007 151.609 16.7007 151.185C16.7007 150.762 16.8689 150.355 17.1683 150.056C17.4678 149.757 17.8739 149.588 18.2974 149.588H39.5202C39.9438 149.588 40.35 149.757 40.6495 150.056C40.949 150.356 41.1172 150.762 41.1172 151.185C41.1172 151.609 40.949 152.015 40.6495 152.315C40.35 152.614 39.9438 152.782 39.5202 152.782V152.782Z"
              fill="#63A5FF"
            />
            <path
              d="M106.46 180.606C110.849 173.545 108.683 164.263 101.622 159.873C94.561 155.484 85.2785 157.65 80.8891 164.711C76.4997 171.772 78.6656 181.055 85.7268 185.444C92.788 189.833 102.071 187.667 106.46 180.606Z"
              fill="#3F3D56"
            />
            <path
              d="M227.912 152.104H205.648C205.172 152.105 204.702 151.998 204.274 151.792C203.845 151.585 203.469 151.285 203.173 150.912C202.881 150.549 202.675 150.124 202.571 149.67C202.466 149.216 202.466 148.745 202.57 148.29C204.673 139.005 204.558 129.355 202.234 120.123C202.069 119.459 202.125 118.76 202.393 118.131C202.662 117.502 203.128 116.978 203.721 116.638C214.536 110.447 223.099 110.618 229.901 117.16C230.378 117.627 230.692 118.234 230.796 118.893C232.449 128.987 232.529 139.276 231.033 149.394C230.928 150.147 230.554 150.836 229.98 151.335C229.406 151.833 228.672 152.106 227.912 152.104Z"
              fill="#FF6584"
            />
            <path
              d="M218.91 131.21H211.252C210.828 131.21 210.422 131.042 210.123 130.742C209.823 130.443 209.655 130.037 209.655 129.613C209.655 129.19 209.823 128.784 210.123 128.484C210.422 128.185 210.828 128.017 211.252 128.017H218.91C219.333 128.017 219.739 128.185 220.039 128.484C220.338 128.784 220.506 129.19 220.506 129.613C220.506 130.037 220.338 130.443 220.039 130.742C219.739 131.042 219.333 131.21 218.91 131.21ZM228.274 137.52H211.251C210.827 137.52 210.421 137.352 210.122 137.052C209.822 136.753 209.654 136.346 209.654 135.923C209.654 135.499 209.822 135.093 210.122 134.793C210.421 134.494 210.827 134.326 211.251 134.326H228.274C228.697 134.326 229.103 134.494 229.403 134.793C229.702 135.093 229.871 135.499 229.871 135.923C229.871 136.346 229.702 136.753 229.403 137.052C229.103 137.352 228.697 137.52 228.274 137.52Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath>
              <rect width={633.164} height={411.502} fill="white" />
            </clipPath>
          </defs>
        </CustomSVG>

      </div>
    </MainLayout>
  </StyledMain>
};

export { LeapingImage };