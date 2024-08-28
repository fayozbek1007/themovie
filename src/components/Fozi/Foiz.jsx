import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

const CircularProgressWithLabel = ({ value }) => {
    return (
        <Box position="relative" display="inline-flex"
            sx={{
                backgroundColor: 'black',
                borderRadius: '50%',
                width:'50px',
                '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.2s ease-in-out',
                },

            }}
        >
            <CircularProgress
                variant="determinate"
                value={100}
                size={50}
                thickness={4}
                sx={{
                    color: '#3e3b3b',
                    width: '30px', 
                    height: '30px',
                }}
            />
            <CircularProgress
                variant="determinate"
                value={value}
                size={50}
                thickness={4}
                sx={{
                    color: '#229b22',
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}
            />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary"
                    sx={{
                        color: 'white', // Matn rangini oq qilish
                        fontSize: '13px', // Matn o'lchamini 16px qilish
                        fontWeight: '500' // Matn vaznini bold qilish
                    }}
                >
                    {`${Math.round(value)}%`}
                </Typography>
            </Box>
        </Box>
    );
};

export default CircularProgressWithLabel;
