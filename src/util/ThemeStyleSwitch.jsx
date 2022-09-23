import {useState} from 'react'

export default function ThemeStyleSwitch() {
    const [themeSwitch, setThemeSwitch] = useState(false)

    const addId = (a) => {
        document.querySelector(a).setAttribute('id','night')
    }
    const removeId = (a) => {
        document.querySelector(a).removeAttribute('id','night')
    }

    if (themeSwitch === true) {
        addId("body")
        addId(".main-controls")
        addId(".pad-controls")
        addId(".sequencer")
        addId(".pads")
        
    }else if (themeSwitch === false){
        removeId("body")
        removeId(".main-controls")
        removeId(".pad-controls")
        removeId(".sequencer")
        removeId(".pads")
    }
    
    const handleSwitch = (e) => {
        
        setThemeSwitch(!themeSwitch)
        
    }

  return (
        <div className="mid">
            <label className="rocker rocker-small">
                <input type="checkbox" value={themeSwitch} onChange={handleSwitch}/>
                <span className="switch-left">Nig</span>
                <span className="switch-right">Day</span>
            </label>
        </div>
  )
}
