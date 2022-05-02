import React from 'react'
import { IconDiscord, IconFacebook, IconFigma, IconGithub, IconGoogle, IconInstagram, IconLinkedin, IconMedium, IconPinteres, IconTikTok, IconTwitch, IconTwitter, IconWhatsapp, IconYoutube } from '../icons';

const SelecIcon = ({nameIcon}) => {
switch(nameIcon){
    case 'Facebook':return (<IconFacebook/>); break;
    case 'Discord':return (<IconDiscord/>); break;
    case 'Figma':return (<IconFigma/>); break;
    case 'Github':return (<IconGithub/>); break;
    case 'Instagram':return (<IconInstagram/>); break;
    case 'Linkedin':return (<IconLinkedin/>); break;
    case 'Medium':return (<IconMedium/>); break;
    case 'Pinteres':return (<IconPinteres/>); break;
    case 'TikTok':return (<IconTikTok/>); break;
    case 'Twitch':return (<IconTwitch/>); break;
    case 'Twitter':return (<IconTwitter/>); break;
    case 'Whatsapp':return (<IconWhatsapp/>); break;
    case 'Youtube':return (<IconYoutube/>); break;
    default: return (<IconGoogle/>);

}
}

export default SelecIcon;
