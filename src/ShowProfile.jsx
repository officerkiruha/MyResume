import profileImg from './Me.jpeg';

export default function ShowProfile() {
    return (
        <div className="card">
            <h1>About Me</h1>
            {/* 2. מכניסים את המשתנה של התמונה לתוך תגית ה-src עם סוגריים מסולסלים */}
            <img src={profileImg} alt="My Profile" className="avatar" />
            <p className="muted">
                Hi, I'm Kirill, 28 years old, living in Giv'at Avni.
                I serve as a reserve officer in the IDF Ordnance Corps, specializing in technology, maintenance, and operational systems.
                Currently, I work as a PDM specialist at QMD and study Software Practical Engineering.
            </p>
        </div>
    );
}