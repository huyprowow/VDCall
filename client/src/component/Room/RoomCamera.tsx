import { Button, Col, Row, Select } from "antd";

import {
  PictureOutlined,
  PauseOutlined,
  PlayCircleOutlined,
  LaptopOutlined,
  FundProjectionScreenOutlined,
} from "@ant-design/icons";
import { TrackHTMLAttributes, useEffect, useRef, useState } from "react";
import { notificationCustom } from "../Message/Notification/notificationCustom";
import { useAudioDevicesStore } from "../../store/audio";
import { useVideoDevicesStore } from "../../store/video";
import { useConstraintsStore } from "../../store/constraint";
import { useShareOptionsStore } from "../../store/shareOption";
import { useInfoShareStore } from "../../store/infoShare";

const { Option } = Select;
const RoomCamera = () => {
  
  const [start, setStart] = useState(false);
  const audioDevices=useAudioDevicesStore((state)=>state.audioDevices)
  const setAudioDevices=useAudioDevicesStore((state)=>state.setAudioDevices)
  const videoDevices=useVideoDevicesStore((state)=>state.videoDevices)
  const setVideoDevices=useVideoDevicesStore((state)=>state.setVideoDevices)
  const constraints=useConstraintsStore((state)=>state.constraints)
  const setConstraints=useConstraintsStore((state)=>state.setConstraints)
  const shareOptions=useShareOptionsStore((state)=>state.shareOptions)
  const setShareOptions=useShareOptionsStore((state)=>state.setShareOptions)
  const infoShare=useInfoShareStore((state)=>state.infoShare)
  const setInfoShare=useInfoShareStore((state)=>state.setInfoShare)
  // const [audioDevice, setAudioDevice] = useState<MediaDeviceInfo>();
  // const [videoDevice, setVideoDevice] = useState<MediaDeviceInfo>();
  let videoRef = useRef<HTMLVideoElement>(null);
  let vdShareRef = useRef<any>(null);
  let canvasScreenShotRef = useRef<HTMLCanvasElement>(null);
  let imgScreenShotRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    getUserPermision();
    // if (videoRef.current) {
    //   videoRef.current.addEventListener("loadedmetadata", () => {
    //     console.log(
    //       "Remote video videoWidth: " +
    //         videoRef.current?.videoWidth +
    //         "px,  videoHeight: " +
    //         videoRef.current?.videoHeight +
    //         "px"
    //     );
    //   });
    //   videoRef.current.onresize = () => {
    //     if (canvasScreenShotRef.current && videoRef.current) {
    //       canvasScreenShotRef.current.width = videoRef.current.videoWidth;
    //       canvasScreenShotRef.current.height = videoRef.current.videoHeight;
    //       // trace('Remote video size changed to ' +
    //       //   video.videoWidth + 'x' + video.videoHeight);
    //       // // We'll use the first onsize callback as an indication that video has started
    //       // // playing out.
    //       // if (startTime) {
    //       //   var elapsedTime = window.performance.now() - startTime;
    //       //   trace('Setup time: ' + elapsedTime.toFixed(3) + 'ms');
    //       //   startTime = null;
    //       // }
    //     }
    //   };
    // }
  }, []);
  const getUserPermision = async () => {
    try {
      await navigator.mediaDevices.getUserMedia(constraints);
      getDeviceSelection();
    } catch (error: any) {
      console.log(error);
      notificationCustom(
        "error",
        "Error",
        "You must permision camera and micro to use feature"
      );
      return null;
    }
  };

  const getDeviceSelection = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(
      (device) => device.kind === "videoinput"
    );

    const audioDevices = devices.filter(
      (device) => device.kind === "audioinput"
    );
    await setAudioDevices(audioDevices);
    await setVideoDevices(videoDevices);
    console.log(devices);
  };
  const onPlayStream = async () => {
    if (
      "mediaDevices" in navigator &&
      navigator.mediaDevices.getUserMedia !== undefined
    ) {
      console.log("getUserMedia", videoDevices[0].deviceId);
      const updateConstraints = {
        video: {
          ...constraints.video,
          deviceId: {
            exact: videoDevices[0].deviceId,
          },
        },
        audio: {
          ...constraints.audio,
        },
      };
      console.log(constraints);
      await setConstraints(updateConstraints);
      startStream(updateConstraints);
    } else {
      alert("cannot find media devices");
    }
  };
  const startStream = async (constraints: any) => {
    console.log("startStream", constraints);
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleStream(stream);
  };
  const handleStream = (stream: any) => {
    if (videoRef.current) {
      // console.log(videoRef);
      console.log(stream);
      videoRef.current.srcObject = stream;
      setStart(true);
    }
  };
  // const handleVideoRef = (ref: HTMLVideoElement) => {
  //   videoRef = ref;
  //   console.log("a", ref);
  // };
  const onPauseStream = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  const handleChangeCamera = async (deviceId: any) => {
    console.log(videoDevices.find((device) => device.deviceId === deviceId));
    // console.log(videoDevices[0]===videoDevices.find((device) => device.deviceId === deviceId));
    const updateConstraints = {
      video: {
        ...constraints.video,
        deviceId: {
          exact: videoDevices.find((device) => device.deviceId === deviceId)
            ?.deviceId,
        },
      },
      audio: {
        ...constraints.audio,
      },
    };

    await setConstraints(updateConstraints);
    startStream(updateConstraints);
    console.log("change camera", updateConstraints);
  };
  const handleChangeAudio = () => {
    console.log("change audio");
  };
  const onShare = () => {
    startCapture();
  };
  const onStopShare = () => {
    stopCapture();
  };
  const onScreenShot = () => {
    if (canvasScreenShotRef.current) {
      const ctx:any = canvasScreenShotRef.current.getContext("2d");

      if (videoRef.current) {
        // canvasScreenShotRef.current.width = videoRef.current.width;
        // canvasScreenShotRef.current.height = videoRef.current.height;

        //bo xu li anh
        // ctx.mozImageSmoothingEnabled = false;
        // ctx.webkitImageSmoothingEnabled = false;
        // ctx.msImageSmoothingEnabled = false;
        // ctx.imageSmoothingEnabled = false;
        
        // ctx?.drawImage(
        //   videoRef.current,
        //   0,
        //   0,
        //   canvasScreenShotRef.current.width,
        //   canvasScreenShotRef.current.height
        // );

        const cw=canvasScreenShotRef.current.width;
        const ch=canvasScreenShotRef.current.height;
        const vw=videoRef.current.videoWidth;
        const vh=videoRef.current.videoHeight;
        if(cw/ch<vw/vh){
            const th=cw*vh/vw;
          ctx?.drawImage(videoRef.current, 0, 0, vw, vh, 0, (ch-th)/2, cw, th);
        }else{
          const tw=ch*vw/vh;
          ctx?.drawImage(videoRef.current, 0, 0, vw, vh, (cw-tw)/2, 0, tw, ch);
        }
        if (imgScreenShotRef.current) {
          imgScreenShotRef.current.src =
            canvasScreenShotRef.current.toDataURL("image/png");
        }
      }
    }
  };

  const startCapture = async () => {
    try {
      if (vdShareRef.current) {
        vdShareRef.current.srcObject =
          await navigator.mediaDevices.getDisplayMedia(shareOptions);
        dumpOptionInfo();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const stopCapture = async () => {
    const tracks = vdShareRef.current.srcObject.getTracks();
    tracks.forEach((track: any) => {
      track.stop();
    });
    vdShareRef.current.srcObject = null;
  };
  const dumpOptionInfo = () => {
    if (vdShareRef.current.srcObject.getTracks().length > 0) {
      const vdShareTrack = vdShareRef.current.srcObject.getVideoTracks()[0];
      console.log(vdShareTrack.getConstraints());
      setInfoShare({
        shareSetting: JSON.stringify(vdShareTrack.getSettings(), null, 2),
        shareConstraints: JSON.stringify(
          vdShareTrack.getConstraints(),
          null,
          2
        ),
      });
    }
  };

  return (
    <>
      <Row>
        <Col span={12}>
          <video autoPlay width="200px" height="200px" ref={videoRef}></video>
        </Col>
        <Col span={12}>
          <canvas
            width="200px"
            height="200px"
            style={{ display: "none" }}
            ref={canvasScreenShotRef}
          ></canvas>
          
            <img
              src=""
              alt="screen shot"
              ref={imgScreenShotRef}
              style={{ objectFit: "contain" }}
            />
         
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <video autoPlay width="350px" height="300px" ref={vdShareRef}></video>
        </Col>
        <Col span={12} style={{ display: "flex", flexDirection: "column" }}>
          <Row style={{ flex: "50%", overflow: "scroll" }}>
            <pre>{infoShare.shareSetting}</pre>
          </Row>
          <Row style={{ flex: "50%", overflow: "scroll" }}>
            <pre>{infoShare.shareConstraints}</pre>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Row justify="center">
            <Col>
              <Button>
                <PictureOutlined onClick={onScreenShot} />
              </Button>
            </Col>
            <Col>
              <Button>
                <PauseOutlined onClick={onPauseStream} />
              </Button>
            </Col>
            <Col>
              <Button>
                <PlayCircleOutlined onClick={onPlayStream} />
              </Button>
            </Col>
            <Col>
              <Button>
                <LaptopOutlined onClick={onShare} />
              </Button>
            </Col>
            <Col>
              <Button>
                <FundProjectionScreenOutlined onClick={onStopShare} />
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={12}>
              <Select
                placeholder="Select Audio"
                style={{ width: "100%" }}
                onChange={handleChangeAudio}
              >
                {audioDevices.map((device) => {
                  return (
                    <Option key={device.deviceId} value={device.deviceId}>
                      {device.label}
                    </Option>
                  );
                })}
              </Select>
            </Col>
            <Col span={12}>
              <Select
                placeholder="Select Camera"
                style={{ width: "100%" }}
                onChange={handleChangeCamera}
              >
                {videoDevices.map((device) => {
                  return (
                    <Option key={device.deviceId} value={device.deviceId}>
                      {device.label}
                    </Option>
                  );
                })}
              </Select>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default RoomCamera;
