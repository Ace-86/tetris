import { useState } from "react";
import BuildBoard from "../utilities/BuildBoard";

export const useBoard = ({ rows, columns}) => {
    const [board, setBoard] = useState(BuildBoard({rows, columns}))
    return [board];
}