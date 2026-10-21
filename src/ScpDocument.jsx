
function ScpDocument({ScpLink = undefined}){
    const ScpDocImage = document.getElementById("scp-doc-image");

    ScpDocImage.addEventListener("click", () => {
        
    })

    return(
        <div>
            <img src={ScpLink} alt="scp-image" id="scp-doc-image" />
        </div>
    )
}

export default ScpDocument