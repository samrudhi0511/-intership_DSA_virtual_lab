import React, { useEffect } from 'react';
import "./assign1.css";

function Assign7() {
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

export default Assign7;
