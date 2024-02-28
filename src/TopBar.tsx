import { Setter, createSignal } from "solid-js";

function getBaudList() { 
    return [
        "4800", "9600", "19200", "38400", "57600", "112500", "230400", "460800", "921600", "1000000", "2000000", "3000000"
    ];
}

function PortSelect(ports: Array<string>, port: string, setPort:Setter<string>)
{
    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-accent rounded-btn">{port !== "" ? "Port" : port}</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                <li><label>COM3</label></li>
                <li><label>COM4</label></li>
                <li><label>COM5</label></li>
            </ul>
        </div>
    );
}

function BaudSelect(baudRate: string, setBaudRate:Setter<string>)
{
    let baudList: string[] = getBaudList();
    let listItems: any = [];

    baudList.forEach((entry) => {
        listItems.push(<li><label>{entry}</label></li>);
    })

    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-accent rounded-btn">{baudRate !== "" ? "Baud Rate" : baudRate}</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                {listItems}
            </ul>
        </div>
    );
}

export default function TopBar(ports: string[], port: string, setPort:Setter<string>, baud: string, setBaud:Setter<string>)
{
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 gap-2 px-4">
                <h1 className="text text-3xl underline font-bold">Tauri Serial Demo</h1>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-2 gap-2">
                    <PortSelect ports={ports} port={port} setPort={setPort} />
                    <BaudSelect baudRate={baud} setBaudRate={setBaud} />
                    <li>
                        <details>
                        <summary>
                            Data Bits
                        </summary>
                        <ul className="p-2 bg-base-100 rounded-t-none">
                            <li><a>7</a></li>
                            <li><a>8</a></li>
                            <li><a>9</a></li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary>
                            Parity
                        </summary>
                        <ul className="p-2 bg-base-100 rounded-t-none">
                            <li><a>None</a></li>
                            <li><a>Odd</a></li>
                            <li><a>Even</a></li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary>
                            Handshaking
                        </summary>
                        <ul className="p-2 bg-base-100 rounded-t-none">
                            <li><a>Off</a></li>
                            <li><a>On</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><button className="btn btn-secondary rounded-btn">Connect</button></li>
                </ul>
            </div>
            <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller" value="forest" />
                {/* sun icon */}
                <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                {/* moon icon */}
                <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            </label>
        </div>
    );
}