import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react'
import Image from 'next/image';

interface ListItems {
    route: string
    title: string
}

const ListDatas: ListItems[] = [
    {
        route: 'features',
        title: 'Features'
    },
    {
        route: 'benefits',
        title: 'Benefits'
    },
    {
        route: 'donateNow',
        title: 'Donate Now'
    },
    {
        route: 'contactUs',
        title: 'Contact Us'
    }
]

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
                        {ListDatas.map((item, id) => (
                            <div onClick={() => window.location.replace(`/#${item.route}`)} className='cursor-pointer hover:text-[#CAA12F]' key={id}>
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </>
            )}
            <Drawer
                open={isDrawerOpen}
                onClose={() => smoothScroll('')}
                anchor="left"
            >
                <List style={{ width: '200px', padding: '10px 10px' }}>
                    <div style={{ marginBottom: '25px' }}>
                    </div>
                    <div>
                        <div onClick={() => smoothScroll('home')
                        } className='cursor-pointer ml-10'>
                            <Image
                                src={'/images/kb_logo.svg'}
                                alt=""
                                width={50}
                                height={50}
                            />
                        </div>
                        {ListDatas.map((item, id) => (
                            <div key={id}>
                                <ListItem onClick={() => smoothScroll(item.route)}>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            </div>
                        ))}
                    </div>
                </List>
            </Drawer>
        </div>
    )
}

export default Navigation
