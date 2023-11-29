import ProgressBar from 'react-bootstrap/ProgressBar';

function BarProgress() {
  const now = 60;
  return <ProgressBar variant="success" now={now} label={`${now}% complete`}  style={{width:"150px", margin:"7px", fontWeight:"500", fontSize:"11px", borderRadius:"40px"}}/>;
}

export default BarProgress;