import {Fragment, useEffect} from "react";
import WebrtcBgModifier from "webrtc-bg-modifier/dist/index.module";
import {Switch} from "antd";

export default function WebrtcBg() {

    useEffect(async () => {
        let bgUrl = null
        let newStream = null


        const outputVideo = document.getElementById("output");
        const stream = await navigator.mediaDevices.getUserMedia({video: true});
        outputVideo.srcObject = stream
        outputVideo.play();
        const bgModifier = new WebrtcBgModifier();


        window.changeBg = async function (url) {
            bgUrl = url;
            newStream = await bgModifier.setBackgroundImage(url).setStream(stream).changeBackground();
            outputVideo.srcObject = newStream;

        };
        window.changeBgColor = async function (color) {
            newStream = await bgModifier.setBackgroundColor(color).setStream(stream).changeBackground();
            outputVideo.srcObject = newStream;

        };

        const bgListItems = bgModifier.backgroundList()
        let bgListHtml = `<div onclick="changeBg(null)"> <video width="100px"   autoplay playsinline id="default-video" /> </div>`;

        bgListHtml += bgListItems.color.map(d =>
            `<div onclick="changeBgColor('${d.value}')">
                        <div style="width: 100px; height: 80px; background: ${d.value}; display: flex; align-items: center; justify-content: center; color: #333; border: 1px solid #ddd; border-radius: 8px;">
                            ${d.alt}
                        </div>
                    </div>`
        ).join('')
        bgListHtml += bgListItems.image.map(d =>
            `<div onclick="changeBg('${d.value}')">
                        <img width="100" src="${d.value}" alt="${d.alt}" style="border: 1px solid #ddd; border-radius: 8px;">
                    </div>`
        )
            .join('');
        document.getElementById("bg-list").innerHTML = bgListHtml

        const defaultVideo = document.getElementById("default-video");
        defaultVideo.srcObject = stream
        defaultVideo.play();
    }, []);

    return <Fragment>

        <video id="output" autoPlay playsInline></video>

        <div id="bg-list"></div>
        <Switch onChange={()=>{

        }}>
Gray
        </Switch> </Fragment>
}