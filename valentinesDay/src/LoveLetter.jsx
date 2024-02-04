import './LoveLetter.css'
export const LoveLetter = (props) =>{
    const handleClose = (event) =>{
        event.preventDefault()
        event.stopPropagation
        console.log(props)
        // eslint-disable-next-line react/prop-types
        props.onClose(false)
    }
    return(
        <div>
        <h3>To Dear Mao,</h3>
        <p>
           
            You are the best thing that has ever happened to me and I wish I could show you how much you actually mean to Diu, even though I cannot be the girlfriend you deserve, I would still try to be the gf you would want!

            To the beautiful mao in my life, you are sunshine in darkness, warm hug through the unbearable chaos and love in the world full of hate! I just want to see you happy no matter what, I would do anything it takes maybe just as friend.

            Maybe someday through the years, you have it in your heart to take me back as your gf I would not dissapoint you and show you off the world, make you the king and treat you like you deserve to be treated, for now I can just tell you, I love you more than life.

            Could you make me the happiest girl alive by being my valentine?
        </p>
        <img src = "./public/valentinecat.gif" className="valentine-cat"></img>
        <div>
        <button onClick={(event)=>{
            handleClose(event)
        }}>CLOSE</button>
        </div>
        </div>
    )
}