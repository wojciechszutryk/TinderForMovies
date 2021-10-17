import { createStyles, makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => {
    return createStyles({
        header: {
            fontWeight: 'bold',
            fontSize: 40,
            textAlign: 'center',
        },
        image: {
            maxWidth: '100%',
            maxHeight: '100%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
        },
        actions: {
            display: 'flex',
            justifyContent: 'space-evenly',
        },
        thumbUpIcon: {
            color: 'green',
        },
        thumbDownIcon: {
            color: 'red',
        },
        spanElement: {
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
        title: {
            textAlign: 'center',
            fontSize: [34, '!important'],
        },
        fadeOutLeft: {
            transform: 'translateX(-100%)',
            opacity: 0,
            backgroundColor: ['green', '!important'],
            transition: ['all .5s', '!important'],
        },
        fadeOutRight: {
            transform: 'translateX(100%)',
            opacity: 0,
            backgroundColor: ['red', '!important'],
            transition: ['all .5s', '!important'],
        },
        visible: {
            opacity: 1,
            transition: ['opacity .5s', '!important'],
        },
    })
})
