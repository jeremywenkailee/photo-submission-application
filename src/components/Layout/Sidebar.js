import classes from '../ViewPage/ViewPage.module.css'
import SidebarSingleEntry from './SidebarSingleEntry';

const testData = [
    {id: 1, submittedBy: 'Jeremy', name: 'English Bay', type:'Beach' , description: 'A great place to start walking along the Seawall. Famously known after the Expo 86, a convention of science held in 1986. alk sdflkjsd ks kfjk sdjf ksdjfk sjdfk jsdk fjsdkf jsdkfj skdfj sldkf jalsdkf jasdlkfj skdfj skdjf laskdf jsldkf jsldkf jsldkfj alkdjfsldk', lat: 49.287572777666156, lon:-123.16171730717282},
    {id: 2, submittedBy: 'Jeremy', name: 'English Bay', type:'Beach', description: 'A great place to start walking along the Seawall', lat: 49.287572777666156, lon:-123.16171730717282},
    {id: 3, submittedBy: 'Jeremy', name: 'English Bay', type:'Building', description: 'A great place to start walking along the Seawall', lat: 49.287572777666156, lon:-123.16171730717282},
]

const SideBar = () => {
    return <div className={classes.sidebar}>
        {testData.map((mapEntry) => {
            return <SidebarSingleEntry mapValue = {mapEntry} />
        })}

    </div>
};

export default SideBar;