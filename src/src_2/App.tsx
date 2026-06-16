// import {useState} from 'react';
import './App.css';
// import {Modal} from "./components/modal/Modal";
import {SuperButton} from "./components/SuperButton.tsx";
import {SuperCrosses} from "./components/SuperCrosses.tsx";
import {Modal} from "./components/modal/Modal.tsx";
// import styles from './components/SuperButton.module.css'


export const App = () => {

    const crosses = [
        {id: 1, model: "ADIDAS", size: "XXL"},
        {id: 2, model: "NIKE", size: "XS"},
        {id: 3, model: "PUMA", size: "XL"},
    ]

    return (
        <div>
            {/*<SuperButton onClick={() => {}} className={styles.redForSuperButton}>*/}
            {/*    Red super button*/}
            {/*</SuperButton>*/}

            {/*<SuperButton onClick={() => {}} className={styles.blueForSuperButton}>*/}
            {/*    Red super button*/}
            {/*</SuperButton>*/}

            {/*<SuperButton color={'red'}> Red SuperButton</SuperButton>*/}
            {/*<SuperButton color={'secondary'}> Secondary SuperButton</SuperButton>*/}
            {/*<SuperButton> Default SuperButton</SuperButton>*/}
            {/*<SuperButton disabled> Disabled SuperButton</SuperButton>*/}

            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <div>Info</div>*/}
            {/*    <div>Info</div>*/}
            {/*    <div>Info</div>*/}
            {/*    <div>Info</div>*/}
            {/*    <div>Info</div>*/}
            {/*    <SuperButton color={'red'}> Red SuperButton</SuperButton>*/}
            {/*    <SuperButton color={'secondary'}> Secondary SuperButton</SuperButton>*/}
            {/*    <SuperButton> Default SuperButton</SuperButton>*/}
            {/*    <SuperButton disabled> Disabled SuperButton</SuperButton>*/}
            {/*</SuperCrosses>*/}

            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <div>Info</div>*/}
            {/*    <div>Info</div>*/}
            {/*    <div>Info</div>*/}
            {/*    <SuperButton color={'red'}> Red SuperButton</SuperButton>*/}
            {/*    <SuperButton color={'secondary'}> Secondary SuperButton</SuperButton>*/}
            {/*</SuperCrosses>*/}

            {/*<SuperCrosses crosses={crosses}>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <input type="text"/>*/}
            {/*    <SuperButton color={'red'}> Red SuperButton</SuperButton>*/}
            {/*    <div>Info</div>*/}
            {/*    <div>Info</div>*/}
            {/*</SuperCrosses>*/}

            <Modal>
                <input type="text" placeholder={"email"}/>
                <input type="text" placeholder={"pass"}/>
                <button>send</button>
            </Modal>
            <Modal>
                <div>Confident Information</div>
                <input type="text" placeholder={"email"}/>
                <input type="text" placeholder={"pass"}/>
                <input type="text" placeholder={"pass"}/>
                <div>
                    <input type="checkbox"/> I agree
                </div>
                <button>send</button>
            </Modal>

        </div>
    );
}
