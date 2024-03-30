import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react'
import Image from 'next/image';

const Navigation = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    useEffect(() => {
        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 1024)
    }

    const smoothScroll = (targetId: string) => {
        const target = document.getElementById(targetId)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <div className='z-20 top-0 left-0 right-0 fixed flex flex-row justify-end items-center w-full lg:px-32 px-6 my-6'>
            {isSmallScreen ? (
                <div>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => smoothScroll('')}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
            ) : (
                <>
                    <div className='shadow-lg bg-[#E6F5FB] space-x-12 rounded-[36px] px-16 py-3 flex items-center mx-auto'>
                        <div onClick={() =>
                            window.location.replace('/#home')
                        } className='cursor-pointer'>
                            <Image
                                src={'/images/kb_logo.svg'}
                                alt=""
                                width={30}
                                height={30}
                            />
                        </div>
                        <div onClick={() => window.location.replace('/#features')} className='cursor-pointer hover:text-[#CAA12F]'>
                            <span>Features</span>
                        </div>
                        <div onClick={() => window.location.replace('/#benefits')} className='cursor-pointer hover:text-[#CAA12F]'>
                            <span>Benefits</span>
                        </div>
                        <div onClick={() => window.location.replace('/#donateNow')} className='cursor-pointer hover:text-[#CAA12F]'>
                            <span>Donate Now</span>
                        </div>
                        <div onClick={() => window.location.replace('/#contactUs')} className='cursor-pointer hover:text-[#CAA12F]'>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </>
            )}
            <Drawer
                open={isDrawerOpen}
                onClose={() => smoothScroll('')}
                anchor="left"
            >
                <List style={{ width: '200px', padding: '40px 10px' }}>
                    <div style={{ marginBottom: '25px' }}>
                    </div>
                    <div>
                        <ListItem onClick={() => smoothScroll('features')}>
                            <ListItemText primary="Features" />
                        </ListItem>
                        <ListItem
                            onClick={() => smoothScroll('benefits')}
                        >
                            <ListItemText primary="Benefits" />
                        </ListItem>
                        <ListItem
                            onClick={() => smoothScroll('donateNow')}
                        >
                            <ListItemText primary="Donate Now" />
                        </ListItem>
                        <ListItem
                            onClick={() => smoothScroll('contactUs')}
                        >
                            <ListItemText primary="Contact Us" />
                        </ListItem>
                        {/* <Button
                            variant="outlined"
                            style={{
                                backgroundColor: '#2B2A2A',
                                color: '#FFFFFF',
                                fontSize: 12,
                                border: '1px solid #6528f7',
                                borderRadius: '20px',
                                padding: '10px 20px',
                                margin: '20px 0px 20px 10px',
                            }}
                        >
                            Contact Us
                        </Button> */}
                    </div>
                </List>
            </Drawer>
        </div>
    )
}

export default Navigation
