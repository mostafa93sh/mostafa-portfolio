import "./Topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            New World.
          </a>
          <div className='itemContainer'>
            <PersonIcon className='icons' />
            <span>01150531486 </span>
          </div>
          <div className='itemContainer'>
            <MailIcon className='icons' />
            <span>mostafa.khalel.93@gmail.ccm </span>
          </div>
        </div>
        <div className='right'>
          <div className='humbrgur' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line3'></span>
            <span className='line5'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
