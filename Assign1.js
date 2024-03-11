import React, { useEffect, useState } from 'react';
import "./assign1.css";


function Assign1() {
    const [searchInput, setSearchInput] = useState('');
    const [array, setArray] = useState([4, 7, 2, 9, 1, 5, 8]);
    const [foundIndex, setFoundIndex] = useState(-1);

    useEffect(() => {
        const sections = ['theory', 'code', 'visualization', 'test'];

        function hideAllSections() {
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    element.style.display = 'none';
                }
            });
        }

        function showSection(sectionId) {
            hideAllSections();
            const element = document.getElementById(sectionId);
            if (element) {
                element.style.display = 'block';
            }
        }

        // Show "Theory" section by default
        showSection('theory');

        // Event listeners for navigation links
        sections.forEach(section => {
            const navElement = document.getElementById(`nav-${section}`);
            if (navElement) {
                navElement.addEventListener('click', () => {
                    showSection(section);
                });
            }
        });

        // Cleanup event listeners
        return () => {
            sections.forEach(section => {
                const navElement = document.getElementById(`nav-${section}`);
                if (navElement) {
                    navElement.removeEventListener('click', () => {
                        showSection(section);
                    });
                }
            });
        };
    }, []); // Empty dependency array to run effect only once
    
    useEffect(() => {
        // Include script to load the JDoodle simulator
        const script = document.createElement('script');
        script.src = 'https://www.jdoodle.com/assets/jdoodle-pym.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up script when component unmounts
            document.body.removeChild(script);
        };
    }, []);

    // Linear search algorithm
    const linearSearch = () => {
        const target = parseInt(searchInput);
        for (let i = 0; i < array.length; i++) {
            if (array[i] === target) {
                setFoundIndex(i);
                return;
            }
        }
        setFoundIndex(-1);
    };

    // Message indicating whether the number is found or not
    const message = foundIndex !== -1 ? `${searchInput} is found` : `${searchInput} not found`;

    return (
        <section className="header">
            <h1>ASSIGNMENTS</h1>

            <div className="nav2">
                <ul>
                    <li><a id="nav-theory" href="#">Theory</a></li>
                    <li><a id="nav-code" href="#">Code</a></li>
                    <li><a id="nav-visualization" href="#">Visualization</a></li>
                    <li><a id="nav-test" href="#">Test</a></li>
                </ul>
            </div>

            <div id="theory">
                <h1 className="theory">Theory</h1>
                <p>Searching algorithms are essential tools in computer science used to locate specific items within a collection of data. These algorithms are designed to efficiently navigate through data structures to find the desired information, making them fundamental in various applications such as databases, web search engines, and more.</p>
                <h3>Table of content</h3>
                <ul>
                    <li>What is Searching Algorithm?</li>
                    <li>Linear Search</li>
                    <li>Binary Search</li>
                    <li>Fibonacci Search</li>
                    <li>Linear Search vs Binary Search</li>
                </ul>
                <h2>What is Searching Algorithm?</h2>
                <p>Searching algorithms are essential tools in computer science used to locate specific items within a collection of data. These algorithms are designed to efficiently navigate through data structures to find the desired information, making them fundamental in various applications such as databases, web search engines, and more.</p>
                <p>These are some commonly used searching algorithms:</p>

               <p>Linear Search: In this simple algorithm, each element in the collection is sequentially checked until the desired item is found, or the entire list is traversed. It is suitable for small-sized or unsorted lists, but its time complexity is O(n) in the worst case.</p>
                <p>Binary Search: This algorithm is applicable only to sorted lists. It repeatedly compares the middle element of the list with the target element and narrows down the search range by half based on the comparison result. Binary search has a time complexity of O(log n), making it highly efficient for large sorted lists.</p>
                <p>Hashing: Hashing algorithms use a hash function to convert the search key into an index or address of an array (known as a hash table). This allows for constant-time retrieval of the desired item if the hash function is well-distributed and collisions are handled appropriately. Common hashing techniques include direct addressing, separate chaining, and open addressing.</p>
                <p>Interpolation Search: Similar to binary search, interpolation search works on sorted lists. Instead of always dividing the search range in half, interpolation search uses the value of the target element and the values of the endpoints to estimate its approximate position within the list. This estimation helps in quickly narrowing down the search space. The time complexity of interpolation search is typically O(log log n) on average if the data is uniformly distributed.</p>
                <p>Tree-based Searching: Various tree data structures, such as binary search trees (BST), AVL trees, or B-trees, can be used for efficient searching. These structures impose an ordering on the elements and provide fast search, insertion, and deletion operations. The time complexity of tree-based searching algorithms depends on the height of the tree and can range from O(log n) to O(n) in the worst case.</p>
                <p>Ternary Search: Ternary search is an algorithm that operates on sorted lists and repeatedly divides the search range into three parts instead of two, based on two splitting points. It is a divide-and-conquer approach and has a time complexity of O(log₃ n).</p>
                <p>Jump Search: Jump search is an algorithm for sorted lists that works by jumping ahead a fixed number of steps and then performing linear search in the reduced subarray. It is useful for large sorted arrays and has a time complexity of O(sqrt(n)), where n is the size of the array.</p>
                <p>Exponential Search: Exponential search is a technique that combines elements of binary search and linear search. It begins with a small range and doubles the search range until the target element is within the range. It then performs a binary search within that range. Exponential search is advantageous when the target element is likely to be found near the beginning of the array and has a time complexity of O(log n).</p>
                 <p>Fibonacci Search: Fibonacci search is a searching algorithm that uses Fibonacci numbers to divide the search space. It works on sorted arrays and has a similar approach to binary search, but instead of dividing the array into halves, it divides it into two parts using Fibonacci numbers as indices. Fibonacci search has a time complexity of O(log n).</p>
                 <p>Interpolation Search for Trees: This algorithm is an extension of interpolation search designed for tree structures such as AVL trees or Red-Black trees. It combines interpolation search principles with tree traversal to efficiently locate elements in the tree based on their values. The time complexity depends on the tree structure and can range from O(log n) to O(n) in the worst case.</p>  
                 <p>Hash-based Searching (e.g., Bloom Filter): Hash-based searching algorithms utilize hash functions and data structures like Bloom filters to determine whether an element is present in a set or not. These algorithms provide probabilistic answers, meaning they can occasionally have false positives (indicating an element is present when it is not), but no false negatives (if an element is not present, it will never claim it is). Bloom filters have a constant-time complexity for search operations.</p>
           <p>String Searching Algorithms: Searching algorithms specific to string data include techniques like Knuth-Morris-Pratt (KMP) algorithm, Boyer-Moore algorithm, Rabin-Karp algorithm, and many others. These algorithms optimize the search for patterns within text or strings and are widely used in text processing, pattern matching, and string matching tasks.</p>
                <h2>Linear Search</h2>
                <p>Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.</p>
                <div>
                    <input
                        type="number"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button onClick={linearSearch}>Search</button>
                </div>
                <div className="array-container">
    {array.map((item, index) => (
        <div
            key={index}
            className={`array-item ${foundIndex === index ? 'found' : ''}`}
        >
            {item}
        </div>
    ))}
</div>
<p className={`message ${foundIndex !== -1 ? 'found' : 'not-found'}`}>{message}</p>
<h2>How Does Linear Search Algorithm Work?</h2>
        <p>In Linear Search Algorithm, </p>
        <ul>
            <li>Every element is considered as a potential match for the key and checked for the same.</li>
            <li>If any element is found equal to the key, the search is successful and the index of that element is returned.</li>
            <li>If no element is found equal to the key, the search yields “No match found”.</li>
        </ul>
       <p>For example: Consider the array arr[] = {10, 50, 30, 70, 80, 20, 90, 40} and key = 30</p>
       <p>Step 1: Start from the first element (index 0) and compare key with each element (arr[i]).</p>
    

            </div>       
            <div id="code">
                <h1 className="code">Code</h1>
            </div>

            <div id="visualization">
                <h1 className="visualization">Visualization</h1>
                <div id="jdoodle-visualization" data-pym-src="https://www.jdoodle.com/embed/v0/2IhG?stdin=1&arg=0"></div>
            </div>

            <div id="test">
                <h1 className="test">Test</h1>
            </div>
        </section>
    );
}

export default Assign1;
