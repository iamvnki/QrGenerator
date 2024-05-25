import { useState } from "react"


export const QrCode = () => {
  const [img,setImg] = useState("");
  const [loading,setLoading] = useState(false);
  const [qrData,setQrData] = useState("");
  const [size,setSize] = useState("");
 async function QrGenerator(){
  setLoading(true);
  try{
    const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrData)}`;

    setImg(url);

  }catch(error){
    console.log("qr generating error" + error);
  }
  finally{
    setLoading(false);
  }
}
function QrDownload(){
  fetch(img)
  .then((response)=>response.blob())
  .then((blob)=>{
    const link = document.createElement("a");
    link.href= URL.createObjectURL(blob);
    link.download="qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please wait...</p>}
        {img && <img src={img} alt="" />}
       <div>
        <label htmlFor="dataInput" className="input-label">
            Data for QR code:
        </label>
        <input type="text" id="dataInput" value={qrData} placeholder="enter for data qr code" onChange={(e)=>setQrData(e.target.value)} />
        <label htmlFor="sizeInput" className="input-label">
            Image size
        </label>
        <input type="text" id="sizeInput" placeholder="enter image size" value={size} onChange={(e)=>setSize(e.target.value)}/>
        <button className="generate-button" disabled={loading} onClick={QrGenerator}>Generate QR code</button>
        <button className="download-button" onClick={QrDownload}>download QR code</button>

       </div>
    </div>
  )
}
