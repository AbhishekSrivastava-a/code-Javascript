document.addEventListener('DOMContentLoaded', () => {
            // Helper function to show results
            function showResult(elementId, message) {
                const resultDiv = document.getElementById(elementId);
                resultDiv.textContent = message;
                resultDiv.classList.remove('hidden');
            }

            // --- 1. Selection Methods ---

            // getElementById
            document.getElementById('getByIdBtn').addEventListener('click', () => {
                const myElement = document.getElementById('myElement');
                showResult('idResult', `Found element by ID: "${myElement.textContent}"`);
            });

            // getElementsByClassName
            document.getElementById('getByClassBtn').addEventListener('click', () => {
                const myClasses = document.getElementsByClassName('myClass');
                let content = 'Found elements by Class: ';
                for (let i = 0; i < myClasses.length; i++) {
                    content += `"${myClasses[i].textContent}"${i < myClasses.length - 1 ? ', ' : ''}`;
                }
                showResult('classResult', content);
            });

            // getElementsByTagName
            document.getElementById('getByTagBtn').addEventListener('click', () => {
                const listItems = document.getElementsByTagName('li');
                let content = 'Found elements by Tag (li): ';
                for (let i = 0; i < listItems.length; i++) {
                    content += `"${listItems[i].textContent}"${i < listItems.length - 1 ? ', ' : ''}`;
                }
                showResult('tagResult', content);
            });

            // querySelector
            document.getElementById('querySelectorBtn').addEventListener('click', () => {
                const specialItem = document.querySelector('.query-example .item.special');
                showResult('querySelectorResult', `Found element by querySelector: "${specialItem.textContent}"`);
            });

            // querySelectorAll
            document.getElementById('querySelectorAllBtn').addEventListener('click', () => {
                const dataPoints = document.querySelectorAll('.data-point');
                let content = 'Found elements by querySelectorAll: ';
                dataPoints.forEach((point, index) => {
                    content += `"${point.textContent}"${index < dataPoints.length - 1 ? ', ' : ''}`;
                });
                showResult('querySelectorAllResult', content);
            });

            // --- 2. Manipulation Methods ---

            // innerHTML
            const innerHtmlDiv = document.getElementById('innerHtmlDiv');
            document.getElementById('getInnerHtmlBtn').addEventListener('click', () => {
                showResult('innerHtmlResult', `innerHTML: ${innerHtmlDiv.innerHTML}`);
            });
            document.getElementById('setInnerHtmlBtn').addEventListener('click', () => {
                innerHtmlDiv.innerHTML = '<p>New <em>HTML</em> content!</p>';
                showResult('innerHtmlResult', 'innerHTML updated!');
            });

            // textContent
            const textContentDiv = document.getElementById('textContentDiv');
            document.getElementById('getTextContentBtn').addEventListener('click', () => {
                showResult('textContentResult', `textContent: ${textContentDiv.textContent}`);
            });
            document.getElementById('setTextContentBtn').addEventListener('click', () => {
                textContentDiv.textContent = 'New plain text content!';
                showResult('textContentResult', 'textContent updated!');
            });

            // setAttribute / getAttribute
            const myImage = document.getElementById('myImage');
            document.getElementById('setAttributeBtn').addEventListener('click', () => {
                myImage.setAttribute('src', 'https://placehold.co/100x100/3B82F6/FFFFFF?text=New');
                myImage.setAttribute('alt', 'New Blue Image');
                showResult('attributeResult', 'Image source and alt attributes changed!');
            });
            document.getElementById('getAttributeBtn').addEventListener('click', () => {
                const altText = myImage.getAttribute('alt');
                showResult('attributeResult', `Image Alt: "${altText}"`);
            });

            // classList (add, remove, toggle)
            const classToggleDiv = document.getElementById('classToggleDiv');
            document.getElementById('addClassBtn').addEventListener('click', () => {
                classToggleDiv.classList.add('red-text', 'green-border');
                showResult('attributeResult', 'Added "red-text" and "green-border" classes.');
            });
            document.getElementById('removeClassBtn').addEventListener('click', () => {
                classToggleDiv.classList.remove('red-text', 'green-border');
                showResult('attributeResult', 'Removed "red-text" and "green-border" classes.');
            });
            document.getElementById('toggleClassBtn').addEventListener('click', () => {
                classToggleDiv.classList.toggle('blue-bg');
                showResult('attributeResult', 'Toggled "blue-bg" class.');
            });

            // createElement & appendChild
            document.getElementById('createAppendBtn').addEventListener('click', () => {
                const parentElement = document.getElementById('parentElement');
                const newParagraph = document.createElement('p');
                newParagraph.textContent = 'This is a new paragraph appended dynamically!';
                newParagraph.classList.add('text-green-700', 'mt-2');
                parentElement.appendChild(newParagraph);
                showResult('attributeResult', 'New paragraph created and appended!');
            });

            // removeChild
            document.getElementById('removeChildBtn').addEventListener('click', () => {
                const removeParent = document.getElementById('removeParent');
                const childToRemove = document.getElementById('childToRemove');
                if (childToRemove) {
                    removeParent.removeChild(childToRemove);
                    showResult('attributeResult', 'Child paragraph removed!');
                } else {
                    showResult('attributeResult', 'Child already removed!');
                }
            });

            // replaceChild
            document.getElementById('replaceChildBtn').addEventListener('click', () => {
                const replaceParent = document.getElementById('replaceParent');
                const childToReplace = document.getElementById('childToReplace');
                if (childToReplace) {
                    const newParagraph = document.createElement('p');
                    newParagraph.textContent = 'This is the NEW paragraph!';
                    newParagraph.classList.add('text-purple-700', 'font-semibold');
                    replaceParent.replaceChild(newParagraph, childToReplace);
                    showResult('attributeResult', 'Child paragraph replaced!');
                } else {
                    showResult('attributeResult', 'Child already replaced!');
                }
            });

            // cloneNode
            document.getElementById('cloneNodeBtn').addEventListener('click', () => {
                const originalNode = document.getElementById('originalNode');
                const clonedNodesContainer = document.getElementById('clonedNodesContainer');
                // true for deep clone (clones children as well)
                const clonedNode = originalNode.cloneNode(true);
                clonedNode.id = ''; // Remove ID to avoid duplicate IDs
                clonedNode.classList.add('ml-4', 'bg-blue-100'); // Add some styling to distinguish
                clonedNodesContainer.appendChild(clonedNode);
                showResult('attributeResult', 'Node cloned (deep) and appended!');
            });


            // --- 3. Event Handling ---

            // addEventListener
            const eventBtn = document.getElementById('eventBtn');
            eventBtn.addEventListener('click', () => {
                showResult('eventResult', 'Button clicked! Event listener triggered.');
            });

            // removeEventListener
            const toggleListenerBtn = document.getElementById('toggleListenerBtn');
            const listenerStatus = document.getElementById('listenerStatus');

            function myClickListener() {
                showResult('eventResult', 'Listener is active! Clicked again.');
            }

            let isListenerActive = true;
            eventBtn.addEventListener('click', myClickListener); // Add initial listener

            toggleListenerBtn.addEventListener('click', () => {
                if (isListenerActive) {
                    eventBtn.removeEventListener('click', myClickListener);
                    listenerStatus.textContent = 'Listener is OFF';
                    listenerStatus.classList.remove('bg-yellow-100', 'border-yellow-300', 'text-yellow-800');
                    listenerStatus.classList.add('bg-red-100', 'border-red-300', 'text-red-800');
                    showResult('eventResult', 'Listener removed!');
                } else {
                    eventBtn.addEventListener('click', myClickListener);
                    listenerStatus.textContent = 'Listener is ON';
                    listenerStatus.classList.remove('bg-red-100', 'border-red-300', 'text-red-800');
                    listenerStatus.classList.add('bg-yellow-100', 'border-yellow-300', 'text-yellow-800');
                    showResult('eventResult', 'Listener re-added!');
                }
                isListenerActive = !isListenerActive;
            });

            // --- 4. Styling Methods ---

            // element.style.propertyName
            const styleDiv = document.getElementById('styleDiv');
            let isStyleChanged = false;
            document.getElementById('changeStyleBtn').addEventListener('click', () => {
                if (!isStyleChanged) {
                    styleDiv.style.backgroundColor = '#10b981'; // Tailwind green-500
                    styleDiv.style.color = '#ffffff';
                    styleDiv.style.padding = '1.5rem';
                    showResult('eventResult', 'Style changed: Green background, white text, more padding!');
                } else {
                    styleDiv.style.backgroundColor = '#cbd5e1'; // Tailwind gray-300
                    styleDiv.style.color = '#1e293b'; // Tailwind slate-800
                    styleDiv.style.padding = '1rem';
                    showResult('eventResult', 'Style reset!');
                }
                isStyleChanged = !isStyleChanged;
            });

            // --- 5. Form Events ---

            // submit event
            const myForm = document.getElementById('myForm');
            myForm.addEventListener('submit', (event) => {
                event.preventDefault(); // Prevent default form submission
                const nameInput = document.getElementById('nameInput');
                showResult('formSubmitResult', `Form submitted! Name: "${nameInput.value}"`);
            });

            // input event
            const liveInput = document.getElementById('liveInput');
            liveInput.addEventListener('input', (event) => {
                showResult('liveInputResult', `Input value: "${event.target.value}"`);
            });

            // change event
            const selectOption = document.getElementById('selectOption');
            selectOption.addEventListener('change', (event) => {
                showResult('selectChangeResult', `Selected option: "${event.target.value}"`);
            });

            // focus and blur events
            const focusBlurInput = document.getElementById('focusBlurInput');
            focusBlurInput.addEventListener('focus', () => {
                showResult('focusBlurResult', 'Input is focused!');
                focusBlurInput.classList.add('border-blue-500', 'ring-2', 'ring-blue-200');
            });
            focusBlurInput.addEventListener('blur', () => {
                showResult('focusBlurResult', 'Input lost focus!');
                focusBlurInput.classList.remove('border-blue-500', 'ring-2', 'ring-blue-200');
            });

            // --- 6. Keyboard Events ---

            // keydown, keyup
            const keyEventInput = document.getElementById('keyEventInput');
            keyEventInput.addEventListener('keydown', (event) => {
                showResult('keyEventResult', `Key Down: "${event.key}" (Code: ${event.code})`);
            });
            keyEventInput.addEventListener('keyup', (event) => {
                // This will overwrite the keydown message, showing the final state after release
                // showResult('keyEventResult', `Key Up: "${event.key}"`);
            });

            // --- 7. Mouse Events ---

            // mouseover and mouseout
            const mouseOverOutDiv = document.getElementById('mouseOverOutDiv');
            mouseOverOutDiv.addEventListener('mouseover', () => {
                mouseOverOutDiv.classList.add('bg-blue-300', 'scale-105');
                showResult('mouseOverOutResult', 'Mouse entered the box!');
            });
            mouseOverOutDiv.addEventListener('mouseout', () => {
                mouseOverOutDiv.classList.remove('bg-blue-300', 'scale-105');
                showResult('mouseOverOutResult', 'Mouse left the box!');
            });

            // mousemove
            const mouseMoveDiv = document.getElementById('mouseMoveDiv');
            mouseMoveDiv.addEventListener('mousemove', (event) => {
                showResult('mouseMoveResult', `Mouse position: X=${event.clientX}, Y=${event.clientY}`);
            });

            // mousedown and mouseup
            const mouseDownUpBtn = document.getElementById('mouseDownUpBtn');
            mouseDownUpBtn.addEventListener('mousedown', () => {
                mouseDownUpBtn.classList.add('scale-95', 'bg-purple-800');
                showResult('mouseDownUpResult', 'Mouse button pressed down!');
            });
            mouseDownUpBtn.addEventListener('mouseup', () => {
                mouseDownUpBtn.classList.remove('scale-95', 'bg-purple-800');
                showResult('mouseDownUpResult', 'Mouse button released!');
            });
        });