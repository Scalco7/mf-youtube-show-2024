type ToastOptions = {
    message: string;
    title?: string;
    variant: ('success' | 'error' | 'warning' | 'info');
    duration?: number;
};

let currentToast: HTMLDivElement | null = null;

export function showToast(options: ToastOptions): void {
    const { message, title, variant, duration = 2000 } = options;

    if (currentToast) {
        document.body.removeChild(currentToast);
        currentToast = null;
    }

    const toastElement = document.createElement("div");
    toastElement.classList.add("toast", `toast--${variant}`);

    // creating a heading element
    if (title) {
        const heading = document.createElement("h1")
        heading.innerText = title
        heading.classList.add("toast-title")
        toastElement.appendChild(heading);
    }

    // creating a message component
    const text = document.createElement("p")
    text.innerText = message
    toastElement.appendChild(text);

    document.body.appendChild(toastElement);

    currentToast = toastElement;

    setTimeout(() => {
        if (currentToast === toastElement) {
            document.body.removeChild(toastElement);
            currentToast = null;
        }
    }, duration);
}