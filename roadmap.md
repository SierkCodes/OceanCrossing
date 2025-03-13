# Roadmap

## Overview
This roadmap outlines the major phases and milestones for building and launching the web application that hosts the real-life team-building game. The goal is to deliver a smooth user experience, accurate game mechanics, and a straightforward interface for the host to input data and track results.

## Phase 1: Requirements & Planning
1. **Gather Requirements**
   - Confirm all game rules, including how distance traveled is calculated.
   - Document user flows (host login, entering teams, managing rounds, etc.).
   - Define data structures (Team, Boat, Grid, Weather, etc.).

2. **Wireframing & Design**
   - Create low-fidelity wireframes for the interface:
     - Team setup screen
     - Round input screens (weather details, directions chosen)
     - Map visualization (51×36 grid)
   - Establish a design style guide (colors, typography, layout).

**Deliverable**: Requirements document & wireframes.

---

## Phase 2: Initial Setup & Architecture
1. **Technical Stack Decision**
   - Choose frontend framework (e.g., React, Vue, Angular).
   - Choose backend solution (e.g., Node.js + Express, Django, etc.).
   - Select database (e.g., PostgreSQL, MongoDB) to store team info, positions, and weather data.

2. **Project Structure & Setup**
   - Initialize frontend project structure (component folders, services).
   - Initialize backend project (routing, database connection, data models).
   - Set up environment variables and basic deployment scripts.

**Deliverable**: Project skeleton with consistent architecture.

---

## Phase 3: Core Features & Database
1. **Database Schema**
   - Create tables/collections for:
     - **Teams** (team name, boat type, current position)
     - **Rounds** (round number, weather data per grid cell)
     - **Game State** (start position, goal position, overall configuration)
   
2. **Team Management**
   - Backend endpoints to create, read, update, and delete teams.
   - UI to add teams (Round 1 functionality).
   - Validations (e.g., required fields, unique team names).

3. **Weather & Grid Management**
   - Backend logic to store and retrieve weather for each cell of the 51×36 grid per round.
   - UI to input or edit weather data each round.

**Deliverable**: Database schema & basic CRUD operations for teams and weather.

---

## Phase 4: Rounds & Game Logic
1. **Round Workflow**
   - Implement the round progression (switching from Round 1 to subsequent rounds).
   - Add forms to let the host input each team’s chosen direction.
   - Store the data (direction, any special conditions, etc.).

2. **Movement & Distance Calculation**
   - Implement the logic that calculates how far each boat moves based on:
     - Boat type
     - Weather conditions
     - Selected direction
   - Update and persist each team’s new position in the database.

3. **Map Visualization**
   - Create a visual representation of the 51×36 grid.
   - Mark teams’ positions on the map.
   - Display current weather conditions in a way that’s useful to the host (e.g., tooltips or color-coded cells).

**Deliverable**: Functioning rounds with dynamic calculations and real-time map updates.

---

## Phase 5: Scoring & Results
1. **Win Conditions**
   - Check if any team reaches the end goal.
   - If after 5 rounds no team reaches the goal, determine which team is closest.
   - Calculate final ranking.

2. **Scoreboard & Summary View**
   - Display scoreboard for the host to easily see:
     - Each team’s position
     - Distance covered
     - Potential winner(s)

**Deliverable**: Finalized scoring logic and user-friendly scoreboard interface.

---

## Phase 6: Testing, Optimization & Deployment
1. **Testing**
   - Unit tests for movement and weather calculations.
   - Integration tests for round progression and data persistence.
   - Manual testing of the user interface.

2. **Performance & Security**
   - Optimize database queries.
   - Validate user inputs thoroughly.
   - Ensure secure API endpoints (authentication, roles, etc.).

3. **Deployment**
   - Deploy to staging environment for final review.
   - Deploy to production environment once fully verified.

**Deliverable**: Production-ready application.

---

## Future Enhancements
- **Customization**: Allow the host to tweak boat stats or weather effects via settings.
- **Advanced Visuals**: Add animations or more detailed weather visuals on the map.
- **Mobile Optimization**: Create a responsive design for small screens (e.g., phones, tablets).
- **Team-facing Portal**: Let teams see partial information like their current position or progress (if desired).

---

## Conclusion
By following this roadmap, we will deliver a polished, reliable web application for hosting the sailing-themed teambuilding game. Each phase builds on the previous one to ensure a solid and maintainable foundation, culminating in a great user experience for both the host and participants.
