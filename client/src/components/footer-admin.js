import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.youtube.com/channel/UC4Zg-yHa0b6vpnNa6H7OZZw">
                Moak Tech Developer
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}