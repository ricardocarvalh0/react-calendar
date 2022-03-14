import {useLayoutEffect, useRef, useState} from "react";
import styles from "../components/calendar/calendar.module.css";

export interface ContainerSize {
    width: number, height: number
}

export function withContainerSizeWatcher(Component: any) {
    const WithContainerSizeWatcher = () => {
        const containerRef = useRef(null);
        const [containerSize, setContainerSize] = useState<{ width: number, height: number }>();

        useLayoutEffect(() => {
            const setSize = () => {
                if (containerRef.current) {
                    const boundingClientRect = (containerRef.current as HTMLDivElement).getBoundingClientRect();
                    if (boundingClientRect) {
                        setContainerSize({width: boundingClientRect.width, height: boundingClientRect.height})
                    }
                }
            }
            window.addEventListener('resize', setSize);
            return () => window.removeEventListener('resize', setSize);
        });

        return (
            <div ref={containerRef} className={styles.container}>
                <Component containerSize={containerSize}/>
            </div>
        )
    };

    WithContainerSizeWatcher.getInitialProps = Component.getInitialProps;

    return WithContainerSizeWatcher;
}

export default withContainerSizeWatcher;