import { Paper, withStyles } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const styles = {
    container: {
        padding: 12,
        marginBottom: '10px',
        marginRight: '5px',
    },
    heading: {
        marginTop: 2,
    },
    list: {
        paddingLeft: '1.5em',
    },
    images: {
        display: 'flex',
        gap: 10,
        overflow: 'auto',
    },
    image: {
        height: 250,
    },
};
interface HelpBoxProps {
    classes: ClassNameMap;
}

const HelpBox = ({ classes }: HelpBoxProps) => {
    return (
        <Paper variant="outlined" className={classes.container}>
            <h2 className={classes.heading}>Need help planning your schedule?</h2>
            <ol className={classes.list}>
                <li>
                    Browse undergraduate majors on the{' '}
                    <a href="https://catalogue.uci.edu/undergraduatedegrees/" target="_blank" rel="noopener noreferrer">
                        UCI Catalogue
                    </a>
                    .
                </li>
                <li>Select your major.</li>
                <li>
                    View the &quot;REQUIREMENTS&quot; and &quot;SAMPLE PROGRAM&quot; tabs to see what classes you should
                    take.
                </li>
            </ol>
            <div className={classes.images}>
                <img
                    className={classes.image}
                    src="/helpbox1.png"
                    alt='UCI General Catalogue with "Explore Undergraduate Programs" button highlighted'
                />
                <img className={classes.image} src="/helpbox2.png" alt="Undergraduate Majors and Minors page" />
                <img
                    className={classes.image}
                    src="/helpbox3.png"
                    alt='Electrical Engineering page with "REQUIREMENTS" and "SAMPLE PROGRAM" tabs highlighted'
                />
            </div>
        </Paper>
    );
};

export default withStyles(styles)(HelpBox);
