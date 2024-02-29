import styled from "styled-components";
import BgImg from "@/assets/home-bg.jpg";
// import LogoImg from "@/assets/demo/logo.svg";
// import LftImg from "@/assets/demo/left-bottom.png";
// import RhtImg from "@/assets/demo/right-bottom.png";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation"
import HomeLogo from "@/assets/logoHome.png"
import TokenSwap from "@/components/tokenswap";
import {Divider, Flex} from "antd";
import ConnectButton from "@/components/ConnectButton";

const BgBox = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #fdfaf1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    @media (max-width: 1100px) {
        padding-top: 100px;
    }
`
const InnerBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    position: relative;
    .bg{
        width: 100%;
    }
    `

const InnerBoxContent = styled.div`
    width: 100%;
    max-width: 1600px;
    display: flex;
`

const LogoBox = styled.div`
    position: absolute;
    left: 40px;
    top: 40px;
    z-index: 99;
    cursor: pointer;
    width: 200px;
    //background: #83271c;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 40px;
    font-size: 23px;
    border-radius: 10px;
    img{width: 100%;}
    @media (max-width: 1100px) {
        left: 5vw;
        top: 5vw;
        width: 145px;
    }
`

const ConnectBox = styled.div`
    position: absolute;
    right: 40px;
    top: 40px;
    z-index: 99;
    @media (max-width: 1100px) {
        right: 5vw;
        top: 5vw;
    }
`

const Leftbox = styled.div`
    position: absolute;
    background: #fff;
    width: 330px;
    height: 140px;
    box-shadow: 0 0 4px #999;
    border-radius: 15px;
    left: 3vw;
    bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span{
        color: rgba(0,0,0,0.85);
        font-size: 25px;
        padding-right: 20px;
    }
    .lft{
        position: absolute;
        left: 0;
        bottom: 0;
    }
    @media (max-width: 1100px) {
        display: none;
    }
`

const FloatBox = styled.div`
    position: absolute;
    right: 0;
    top: 25vw;
    @media (max-width: 1440px) {
        right: 0;
        top: 28vw;
    }
    @media (max-width: 1100px) {
        /* top: auto;
        bottom: 20vw;
        right: 10vw;
        left: 10vw; */
        padding: 35px 0;
        position: static;
        margin: 0 20px;
    }
    & > *:not(:first-child) {
        margin-top: 20px;
    }
`

const RhtBox = styled.div`
    padding:20px;
    background: #83271c;
    box-shadow: 0 0 4px #999;
    border-radius: 15px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    .rht{
        position: absolute;
        left: 0;
        bottom: 0;
    }
    @media (max-width: 1440px) {
        top:28vw;
    }
    @media (max-width: 1100px) {
        border-radius: 15px;
        justify-content: center;
        .rht{
            width: 38vw;
        }
    }
`

const RhtInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 0 30px;
    .lft{
       font-size: 25px; 
    }
    .top{
        color: #e5959a;
        display: flex;
        flex-direction: column;
        
    }
    
    .center,.com{
        text-align: center;
    }
    @media (max-width: 1100px) {
        .lft{
            width: 150px;
            font-size: 13px;
            text-align: center;
        }
        .top{
            margin-bottom: 10px;
        }
    }
`
const BtnRht = styled.div`
    width: 120px;
    height:45px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    background: #fff;
    justify-content: center;
    color: #6b6c6e;
    font-size: 12px;
    border-radius: 15px;
    cursor: pointer;

    @media (max-width: 1100px) {
        width: 26vw;
        height: 45px;
       margin: 0 15px;
    }
`



export function Home() {
    // const navigate = useNavigate()
    const navigate = useRouter().push

    const toGo = (url: string) => {
        navigate(url)
    }

    return <BgBox>
        <LogoBox onClick={()=>toGo("/")}>
            <img src={HomeLogo.src} alt=""/>
            {/*AILOONG*/}
        </LogoBox>
        <ConnectBox>
            <ConnectButton />
        </ConnectBox>
        <InnerBox>
            <InnerBoxContent>
                <img src={BgImg.src} alt="" className="bg"/>
            </InnerBoxContent>
            <FloatBox>
                <RhtBox>
                    <RhtInner>
                        <div className="lft">
                            <div className="top">ERC404 AI Gnosis</div>
                            <div className="price"><span className="center"> 1100 Great Loong</span></div>
                        </div>
                        <BtnRht onClick={()=>toGo("/mint/great")}>
                            Mint Now
                        </BtnRht>
                    </RhtInner>
                </RhtBox>
                <RhtBox>
                    <RhtInner>
                        <div className="lft">
                            <div className="top">ERC404 AI Gnosis</div>
                            <div className="price"><span className="center"> 1100 Baby Loong</span></div>
                        </div>
                        <BtnRht onClick={()=>toGo("/mint/baby")}>
                            Mint Now
                        </BtnRht>
                    </RhtInner>
                </RhtBox>
                <RhtBox>
                    <RhtInner>
                        <div className="lft">
                            <div className="top">Chat with Me</div>
                        </div>
                        <BtnRht onClick={()=>toGo("/chat")}>
                            Start
                        </BtnRht>
                    </RhtInner>
                </RhtBox>
            </FloatBox>
        </InnerBox>
        {/* Swap */}
        <InnerBox>
           <TokenSwap />
        </InnerBox>
    </BgBox>
}
