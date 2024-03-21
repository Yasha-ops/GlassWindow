console.log('Background Service Worker Loaded')

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const { command, data } = message
    console.log(message)
    switch (command) {
        case 'service_remove_popup':
            console.log('Service worker received get_ips command')
            chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
                const activeTab = tabs[0]
                chrome.tabs.sendMessage(activeTab.id!, { command: 'content_remove_popup' })
            })
            break
        default:
            break
    }
})

chrome.commands.onCommand.addListener(command => {
    console.log(`Command: ${command}`)

    if (command === 'refresh_extension') {
        chrome.runtime.reload()
    }
})

export {}
