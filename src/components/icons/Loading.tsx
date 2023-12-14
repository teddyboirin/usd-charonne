import { memo } from 'react'

function Loading() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            x="0"
            y="0"
            enableBackground="new 0 0 50 50"
            version="1.1"
            viewBox="0 0 50 50"
            xmlSpace="preserve"
        >
            <path
                d="M25.251 6.461c-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615V6.461z"
                style={{ fill: 'white' }}
            >
                <animateTransform
                    attributeName="transform"
                    attributeType="xml"
                    dur="0.6s"
                    from="0 25 25"
                    repeatCount="indefinite"
                    to="360 25 25"
                    type="rotate"
                ></animateTransform>
            </path>
        </svg>
    )
}
export default memo(Loading)