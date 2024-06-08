import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Socials = (props) => {
    return (
        <ul className='social-icn-common'>
            {
                (props.data)
                    ?
                    <>
                        {
                            props.data.twitter
                                ?
                                <li><a target='_blank' href={props.data.twitter}><XIcon /></a></li>
                                :
                                null
                        }
                        {
                            props.data.whatsapp
                                ?
                                <li><a target='_blank' href={'https://api.whatsapp.com/send?phone='+props.data.whatsapp}><WhatsAppIcon /></a></li>
                                :
                                null
                        }
                        {
                            props.data.instagram
                                ?
                                <li><a target='_blank' href={props.data.instagram}><InstagramIcon /></a></li>
                                :
                                null
                        }
                        {
                            props.data.facebook
                                ?
                                <li><a target='_blank' href={props.data.facebook}><FacebookOutlinedIcon /></a></li>
                                :
                                null
                        }
                        {
                            props.data.youtube
                                ?
                                <li><a target='_blank' href={props.data.youtube}><SubscriptionsIcon /></a></li>
                                :
                                null
                        }
                        {
                            props.data.linkedIn
                                ?
                                <li><a target='_blank' href={props.data.linkedIn}><LinkedInIcon /></a></li>
                                :
                                null
                        }
                    </>
                    :
                    null
            }

        </ul>
    )
}

export default Socials
