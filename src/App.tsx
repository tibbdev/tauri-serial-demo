import { Setter, createSignal } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";

import TopBar from "./TopBar.tsx"

const COMPORTS_LIST = [
    "COM3",
    "COM4",
    "COM5",
];

export default function App() {
    const [greetMsg, setGreetMsg] = createSignal("");
    const [name, setName] = createSignal("");
    const [port, setPort] = createSignal("COMX");
    const [baud, setBaud] = createSignal("");

    async function greet() 
    {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke("greet", { name: name() }));
    }

    return (
        <div>
            <TopBar ports={COMPORTS_LIST} port={port} setPort={setPort} />

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Greet" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <form
                        class="row"
                        onSubmit={(e) => {
                            e.preventDefault();
                            greet();
                        }}
                        className="flex px-8 py-8 gap-4 justify-center"
                    >
                        <input
                            type="text"
                            className="input input-bordered"
                            id="greet-input"
                            onChange={(e) => setName(e.currentTarget.value)}
                            placeholder="Enter a name..."
                            />
                        <button className="btn btn-outline btn-primary rounded-full px-8" type="submit">Greet</button>
                    </form>

                    <p className="flex py-4 gap-4 justify-center">{greetMsg()}</p>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Control Panel"  />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Control Panel TBD</div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Terminal" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Terminal TBD</div>
            </div>
        </div>
    )
}
