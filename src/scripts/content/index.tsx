const isProduction: boolean = process.env.NODE_ENV === 'production'
const ROOT_ID = 'RENAME_ME_IF_YOU_WANT'

function remove_popup() {
    document.getElementById('HardsellOverlay').remove()
    document.body.style.overflow = 'overlay'
    document.body.style.position = 'absolute'
}

// content/index.tsx
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const { command } = message
    console.log('Content script received message:', message)

    switch (command) {
        case 'content_remove_popup':
            const ips = remove_popup()
            chrome.runtime.sendMessage({
                command: 'service_remove_popup_response'
            })
        default:
            break
    }
})
