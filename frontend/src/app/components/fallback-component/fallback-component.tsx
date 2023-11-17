import { Loader } from 'app/components/loader/loader';
import { ReactNode } from 'react';

export function FallbackComponent(): ReactNode {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Loader />
        </div>
    );
}
