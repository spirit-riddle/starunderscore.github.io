# Graph Theory Algorithms

## Traversal Algorithms
1. **Depth-First Search (DFS)**: Explores as far as possible along each branch before backtracking. Used in pathfinding, cycle detection, and topological sorting.
2. **Breadth-First Search (BFS)**: Explores neighbors level by level. Ideal for finding the shortest path in unweighted graphs and testing connectivity.
3. **Random Walk**: Traverses graph edges randomly. Used in simulations, network analysis, and probabilistic algorithms.

---

## Shortest Path Algorithms
1. **Dijkstra's Algorithm**: Finds the shortest path from a source to all other nodes in a weighted graph. Common in GPS navigation and network routing.
2. **Bellman-Ford Algorithm**: Computes shortest paths while handling negative weights. Useful in financial modeling and network flows.
3. **Floyd-Warshall Algorithm**: Finds shortest paths between all pairs of nodes. Applied in dense graphs and all-pairs analysis.
4. **A***: A heuristic-based algorithm for shortest path finding, commonly used in AI for game development and robotics.

---

## Graph Coloring Algorithms
1. **Greedy Coloring**: Assigns colors to graph vertices, ensuring no two adjacent vertices share the same color. Used in scheduling and register allocation.
2. **Backtracking Coloring**: Exhaustively searches for valid colorings. Suitable for constraint satisfaction problems.
3. **Welsh-Powell Algorithm**: Orders vertices by degree and colors them greedily. Effective for sparse graphs.

---

## Network Flow Algorithms
1. **Ford-Fulkerson Method**: Computes the maximum flow in a flow network. Used in transportation and network capacity planning.
2. **Edmonds-Karp Algorithm**: An implementation of Ford-Fulkerson using BFS to find augmenting paths. Ensures polynomial runtime.
3. **Dinic’s Algorithm**: Improves max-flow computation using level graphs. Efficient for large networks.
4. **Push-Relabel Algorithm**: Uses preflows to find maximum flows. Useful in bipartite matching.

---

## Minimum Spanning Tree (MST) Algorithms
1. **Prim's Algorithm**: Builds an MST by adding the shortest edge connected to the growing tree. Used in network design and clustering.
2. **Kruskal's Algorithm**: Adds edges in increasing order of weight while avoiding cycles. Effective for edge-sparse graphs.
3. **Borůvka's Algorithm**: Finds MST by repeatedly adding cheapest edges. Applied in parallel computing.

---

## Matching Algorithms
1. **Hungarian Algorithm**: Solves the assignment problem for weighted bipartite graphs. Used in resource allocation and scheduling.
2. **Hopcroft-Karp Algorithm**: Finds maximum matching in bipartite graphs. Applied in job assignments and network flows.

---

## Planarity Testing
1. **Kuratowski’s Theorem**: Determines if a graph is planar. Foundational in topology and graph drawing.
2. **Hopcroft-Tarjan Algorithm**: Tests graph planarity in linear time. Used in visualization and VLSI design.

---

## Cycle Detection
1. **Tarjan’s Algorithm**: Finds all strongly connected components in a directed graph. Useful in dependency analysis.
2. **Union-Find Cycle Detection**: Detects cycles in undirected graphs efficiently. Common in graph connectivity problems.

---

## Other Specialized Algorithms
1. **PageRank Algorithm**: Ranks vertices based on link structure. Core to web search engines.
2. **Havel-Hakimi Algorithm**: Tests if a degree sequence is graphical. Foundational in graph theory studies.
3. **Bron-Kerbosch Algorithm**: Finds all maximal cliques in an undirected graph. Used in social network analysis.
