import { Dispatch, SetStateAction } from "react";

export interface IToggle {
    setActive: Dispatch<SetStateAction<boolean>>
}