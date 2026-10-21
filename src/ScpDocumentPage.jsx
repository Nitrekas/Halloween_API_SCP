import { useState } from "react";

function ScpDocumentPage(){

    const [scpData, setScpData] = useState({title: "", image: ""});
    const audio1 = new Audio("./audio/scp_079.wav")
    let scp079Events = 0;



    function fetchScpData(scp){
        fetch("https://scp-data.tedivm.com/data/scp/items/index.json")
        .then(response => response.json())
        .then(data => {
            const ScpIndex = data[scp];
            setScpData({title: ScpIndex.title, image: ScpIndex.images[0]})
        })
    }
    
    return(
        <>
            <div id="scp-document-container">
                <div id="scp-document-content">
                    <h1 id="document-title">{scpData.title}</h1>
                    <img id="scp-image" src={scpData.image} alt={scpData.title} />
                    <p id="document-text"></p>
                </div>
            </div>
            <div className="scp-label-group">
            <img className="scp-label-image" src="https://static.wikia.nocookie.net/scpcb_gamepedia/images/a/a7/Label049.jpg/revision/latest/scale-to-width-down/250?cb=20131011211803" alt="scp-doc-image" id="scp-doc-image" onClick={() => fetchScpData("SCP-049")} />
            <img className="scp-label-image" src="https://static.wikia.nocookie.net/scpcb_gamepedia/images/4/4d/Label035.jpg/revision/latest/scale-to-width-down/250?cb=20180802170142" alt="scp-doc-image" id="scp-doc-image" onClick={() => fetchScpData("SCP-035")} />
            <img className="scp-label-image" src="https://static.wikia.nocookie.net/scpcb_gamepedia/images/d/d1/Label106.jpg/revision/latest/scale-to-width-down/250?cb=20180802170240" alt="scp-doc-image" id="scp-doc-image" onClick={() => fetchScpData("SCP-106")} />
            <img className="scp-label-image" src="https://static.wikia.nocookie.net/5a3f87fd-2326-42ec-8ea9-50af984af7e4/scale-to-width/755" id="scp-doc-image" onClick={() => fetchScpData("SCP-682")} />
            <img className="scp-label-image" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/354f5488-3258-4127-b1f0-ec469e2eafc6/d7vkhtc-bdbe7508-1f91-43cb-9f0e-0bfb9bf764b5.png/v1/fill/w_512,h_512,q_80,strp/scp_096_label_by_agentkulu_d7vkhtc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6Ii9mLzM1NGY1NDg4LTMyNTgtNDEyNy1iMWYwLWVjNDY5ZTJlYWZjNi9kN3ZraHRjLWJkYmU3NTA4LTFmOTEtNDNjYi05ZjBlLTBiZmI5YmY3NjRiNS5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2Dv0o3SrCIXsOAdz8E5kHjIfqQQ3nRHboXAbbsnOpr0" id="scp-doc-image" onClick={() => fetchScpData("SCP-096")} />
            </div>
        
        </>
    )
}

export default ScpDocumentPage