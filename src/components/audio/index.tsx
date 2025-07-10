import {  useRef } from "react"

const AudioPlayer = () => {
    const player = useRef(null)
    const playMusic = () =>  {
        if (player.current) {
            (player.current as HTMLAudioElement).play()
        }
    }
    return (
        <>
            <audio src="/src/assets/sounds/test.mp3" ref={player}></audio>
            <button onClick={playMusic}>Play</button>
        </>
    )
}

export default AudioPlayer