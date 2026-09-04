// Each entry is one object in this array.
// Add new entries at the top (or anywhere) — order in the list matches order here.
// id must be unique. date format: "YYYY-MM-DD".
// tags is optional — leave as [] if you don't want any.
// body supports markdown (headings, lists, links, code, etc).

const POSTS = [
    {
    id: "level-design-for-casual-games-2026-09-04",
    title: "Level Design for Casual Games",
    date: "2026-09-04",
    tags: ["Game Design"],
    body: `🎮 Detailed Summary: "Level Design Saga: Creating Levels for Casual Games"
Presenter: Jeremy Kang, Principal Game Designer at King Berlin
. Core Premise: While extensive literature exists for game design, very little formally covers level design—especially for casual, free-to-play mobile games
. In casual "Saga" games, the mechanics are simple, meaning level design is the actual gameplay experience
.
Jeremy structures his methodology around the "Four Ts": Theory, Thought, Tools, and Testing
.
I. Theory: What is Casual Level Design?
The Role of Level Design: It is a composite role blending art, code, and design
. While a game designer establishes the rules and systems (creating the building blocks, like Lego), the level designer implements them into dynamic experiences (assembling the blocks into structures like castles or spaceships)
.
The MDA Framework Slant: Game designers create mechanics, which run to create dynamic situations, leading to aesthetic experiences for the player
. Level design acts as a funnel, actively channeling these dynamics into emotional/aesthetic experiences
.
The "Saga Envelope": King frequently takes successful 3-to-5-minute browser games from its royal Gamescom platform and wraps them in a "Saga Envelope"
. This envelope features linear progression (often growing to over a thousand levels), a social world map, gifting lives, and a casual target audience
. The constant content updates (every 1 to 2 weeks) act as a powerful progression-based retention driver
.
II. Thought: The Four Core Design Principles
Jeremy adapts four core concepts from Ed Byrne's book Game Level Design—Difficulty, Rhythm, Flow, and Hooks—and translates them into "bite-size brilliance" for mobile environments (where players are highly distracted on trains, babysitting, or eating lunch)
.
1. Hooks (Creating Unique Levels)
A hook is a unique twist that differentiates a level from all others
.
Utilizing a Mechanic: In Blossom Blast Saga, designers focus on the chain-reaction "blossom blast" by building a board with only one objective: clearing a single patch of weed in the center
.
Combining Elements: In Candy Crush Jelly Saga, they merged a standard finding-the-puffle mode with the green-jelly-spreading AI of the "Jelly Queen" to create a competitive boss fight against "Cupcake Cow"
.
Emotional "Wow" Moments: Designing a board with only one opening move (e.g., matching a chocolate bomb with an orange candy) to instantly set off a massive cascade of vertical blasts and start the level on an exciting high
.
Gameplay Modifiers: Introducing custom physics layers, such as wind direction in Farm Heroes Super Saga, which makes pieces fall in the direction of the player's match
.
2. Flow (Turn-to-Turn Dynamics)
In turn-based puzzle games, "moment-to-moment" gameplay becomes "turn-to-turn" gameplay
. The level designer acts as an "invisible hand" guiding players forward
.
Opening Choices Gradually: In Candy Crush Soda Saga, a level might start with only one legal move that generates a powerful "color converter"
. Activating it clears the board, creates a chocolate bomb, and systematically opens the board into a wide gameplay space with abundant choices
.
Semi-Deterministic Helpers: In Lucky Lantern, behind clouds, designers place question-mark tiles with a 30% probability of spawning power-ups
. This naturally guides player flow toward sub-goals
.
The Hand of God: When subtle level design prompts fail to guide a casual player, the game's automatic hint system steps in to highlight obvious moves
.
3. Rhythm (The Emotional Rollercoaster)
Rhythm is the frequency and intensity of events across an episode (typically a cluster of levels)
.
The Intensity Curve: Progression should not be a flat line; it must rise and fall to give players an emotional journey
.
Rhythm Levers: Variety is introduced by swapping game modes, alternating long and short levels, introducing blockers, and balancing easy and hard levels
. Designers use extensive Level Libraries (spreadsheets cataloging modes and blockers) and Beat Charts to map this rhythm out visually
.
Ki-Shoten-Ketsu (Nintendo's Four-Step Structure): Jeremy applies this narrative structure to level progression
:
Ki (Introduce): Present a new mechanic/blocker in a highly controlled, safe space
.
Sho (Train): Allow the player to practice and utilize the mechanic naturally in normal play
.
Ten (Twist): Combine the mechanic with another obstacle (e.g., combining Blossom Blast buds with a locking glass blocker) to challenge assumptions
.
Ketsu (Conclude/Test): A final gauntlet level that forces the player to master everything they've learned
.
III. Tools: Scale and Handcrafting
No Procedural Generation: A core revelation is that every single level in King's Saga games is completely handcrafted by human designers
.
Visual Editors: Designers use custom, rapid-prototyping editors to manually draw the board, set up starting blocker placement, configure objectives, and paint properties
. This allows them to instantly run, tweak, and re-test concepts on the fly
.
Team Sizes: Depending on the game's scale, team structures vary. Candy Crush at one point had four dedicated level designers, while Jeremy's soft-launch team in Berlin consisted of three designers who all shared level design duties
.
IV. Testing: The Mathematician Meets the Magician
To optimize levels, a designer must balance their creative instinct ("magician's gut") with rigorous data analysis ("mathematician")
.
The Primary Difficulty Lever: While moves and targets are standard, the number of active colors on the board is the single most powerful lever for adjusting difficulty
. Reducing active colors dramatically increases automatic cascading and power-up creation, lowering difficulty
.
The Danger of Creative Bias: Jeremy notes that designers are terrible at predicting true player difficulty
. He once designed a level he predicted would take an average of 8 player attempts; real-world data revealed the actual average was 24 attempts
.
The Testing Pipeline:
Self-Testing: The designer plays the level 15–20 times
.
Internal Peer Testing: Other designers evaluate it for fun and difficulty
.
Qualitative User Testing: Live users play the level and talk through their thoughts aloud
.
Playtest Releases (Soft Launch): Releasing the level pack to a small country group of a few thousand players to harvest quantitative telemetry
.
Analytical Telemetry: King tracks progression via drop-off curves (A/B testing easy vs. hard paths), cumulative player attempts, and average attempts-to-win per level
.
The Famous Case of Level 65: In early versions of Candy Crush Saga, Level 65 was designed to be the final level, so the team threw every obstacle at the player to make it "insanely hot"
. When more levels were added, it remained a massive roadblock where 18% of players named it the hardest level ever ("This level just sucks")
. Using telemetry, King systematically balanced it over time (removing corner chocolate, lowering frosting tiers) to turn it into a fun, highly praised stage
.
V. Key Q&A Insights
The Inaccuracy of AI Bots: King utilizes AI bots (using heuristic decision models like Monte Carlo Tree Search) to run simulated tests
. However, Jeremy notes these bots are historically inaccurate
. They are useful for mapping general difficulty curves, but actual player data is always required because of real-world "offsets"
.
Controlling Luck & Randomness: Mobile puzzle games have heavy luck in their core mechanics
. King uses a mix of semi-deterministic spawning rules and "seeding systems" to filter out impossibly bad boards
. Additionally, there are subtle safety valves: if a player cascades too much, the game might inject a 6th color mid-cascade to stop an infinite loop
.
Experimenting with Non-Linearity: While King has researched branching, open-world maps, and non-linear paths, it remains a major UX hurdle
. Casual players are highly accustomed to linear progression, making it difficult to transition them into complex structures
.
Standard Progression Rhythm: Sequelled games introduce new features immediately to capture returning players in their first 5 minutes
. As a rule of thumb, designers avoid running the same game mode for more than 3 to 5 levels in a row to prevent fatigue
.
The "Difficulty Budget": The first 50 levels of a game are rigorously handcrafted and monitored because they dictate player retention
. For later progression, levels are designed around a strict "difficulty budget" per episode
.`
  },
];
