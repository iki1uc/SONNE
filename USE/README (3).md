# API – Durchlassachse · iki1uc

**API**  
Die Durchlassachse zwischen allen Modulen.  
AUTO sendet → API empfängt → API gibt weiter.

**AUTO**  
Erzeugt RESPO (axis, orbit, pulse) und übergibt an API.

**RAW**  
Unverarbeitete Basisdaten (ANKER.raw).  
API kann RAW direkt lesen oder weiterreichen.

**ID**  
Eindeutiger Raumname.  
API nutzt ID, um Module wie iki1uc, NC.sync, Fusion oder Drift anzusteuern.

**iki1uc**  
Modul‑Container.  
API ruft Funktionen darin auf, wenn AUTO neue RESPO liefert.

Kurz:  
AUTO erzeugt → API leitet → Module reagieren.
