# health-buddy-widget

## How to insert on your website

1. Insert the link tag and script tag into the head of the page you want the chat to be inserted into:
    ```js
    <link href="assets/css/chat.css" rel="stylesheet" />
    <script src="assets/js/language.js"></script>
    <script src="assets/js/bot.js"></script>
    ```
2. Check that the referenced css file that you have copied is the one in `assets/css/chat.css`
3. Check that the referenced javascript files that you have copied is the one in `assets/js` folder
4. Insert a div with the id `webchat` in the body of the page that the chat will be inserted into:
    ```html
    <div id="webchat" />
    ```
5. Insert this script tag at the bottom of the page's body section to load the widget:
    ```js
    <script>
        function isMobile() {
            try {
                document.createEvent("TouchEvent");
                return true;
            } 
            catch (e) {
                return false;
            }
        }
        var setButtonText = function () {
            const paragraph = document.createElement("p");
            document.getElementsByClassName("push-launcher")[0].appendChild(paragraph);
            document.getElementsByClassName("push-launcher")[0].getElementsByTagName("p")[0].innerText = buttonText;
        }
        var config = {
            selector: "#webchat",
            initPayload: initPayload,
            channelUuid: "f2cc9ec6-07f1-407a-8948-ece57761d88e",
            host: "https://rapidpro.ilhasoft.mobi",
            title: "HealthBuddy",
            inputTextFieldHint: inputText,
            profileAvatar: "./assets/img/chat-avatar.svg",
            disableTooltips: true,
            docViewer: true,
            showFullScreenButton: true,
            hideWhenNotConnected: true,
            params: {
                images: {
                    dims: {
                        width: 712,
                        height: 844
                    }
                },
                storage: "session"
            },
            onSocketEvent: {
                'connect': () => setTimeout(setButtonText, 1000)
            }
        }
        if (!isMobile()) {
            WebChat.default.init(config);
        } else {
            // Mobile view
            config.tooltipPayload = initPayload;
            config.disableTooltips = false;
            WebChat.default.init(config);
        }
    </script>
    ```
6. Check that the referenced svg file for the chat `profileAvatar` in the script that you have copied is the one in `assets/img/chat-avatar.svg`.

## Attributes configuration

You can find the documentation for the attributes that can be used in the `config` variable [here](https://github.com/push-platform/push-webchat#parameters).

## Customizing the chat

The chat colors can be fully customized by changing de `assets/css/chat.css` file, the exising css classes for customization can be found [here](https://github.com/push-platform/push-webchat#styles)

## Interacting with the chat behavior

Some methods can be used to change the chat behavior such as closing the widget, clearing the chat history, you can find the documentation for those methods [here](https://github.com/push-platform/push-webchat#api)