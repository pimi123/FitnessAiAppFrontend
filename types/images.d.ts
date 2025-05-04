declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.jpg' {
    const content: string;
    export default content;
}

declare module '*.jpeg' {
    const content: string;
    export default content;
}

declare module '*.gif' {
    const content: string;
    export default content;
}

declare module '*.svg' {
    import * as React from 'react';
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
}
