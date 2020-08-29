import React from 'react';
import './About.css'

const About = () => {
    return(
        <section id="about" className="about">
            <h2>About this Algorithm</h2>
            <div>
                <h4>Conway's Game of Life</h4>
                <p>Conway's Game of Life was created in 1970 by the British mathmetician, John Horton Conway. The player interacts with the game by creating an initial layout, and when executed, the game is capable of infinitely evolving. It is a turing complete algorithm that simulates cellular automata.</p>
            </div>
            <div>
                <h4>Cellular Automata</h4>
                <p>Cellular automation (CA) are discrete, abstract computational systems. They display complex behavior based on a relatively small set of rules on a group of simple homogeneous cells. Using the set rules, cellular autamta will run an algorithm and can simulate turing completeness.</p>
            </div>
            <div>
                <h4>Turing Completeness</h4>
                <p>Simply put, turing completeness means that the system will be able to recognize and decide what to do with an arbitrary number of data items based on a set of rules. In the case of Conway's Game of life, the user gives it any size grid, and the system will be able to simulate each generation of life infinitely based on the rule set given.</p>
            </div>
            <div>
                <h4>Double Buffer</h4>
                <p>This project implements a double buffer. The application will generate the next step/generation of the algorithm one step ahead. While the user selects the grid layout of their desire, it will already have produced the next generation before the 'start' or 'step' buttons are pressed. As the generation is visually updated, the next generation will be produced in the background.</p>
            </div>
        </section>
    )
}
export default About