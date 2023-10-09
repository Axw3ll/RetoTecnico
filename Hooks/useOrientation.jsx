import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect, useState } from 'react';

const useOrientation = () => {
    const [screenOrientation, setScreenOrientation] = useState(ScreenOrientation.Orientation.PORTRAIT_UP);

    useEffect(() => {}, []);
}