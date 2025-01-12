
# Graph Theory Terminology for Search Engines

## Fundamental Concepts
- **Graph**: A collection of nodes (vertices) and edges connecting them, used to represent relationships and structures.
- **Directed Graph (Digraph)**: A graph where edges have a direction, often used in web page link analysis.
- **Undirected Graph**: A graph where edges have no direction, representing bidirectional relationships.

## Key Properties
- **Node (Vertex)**: A fundamental unit of a graph, representing entities such as web pages or data points.
- **Edge**: A connection between two nodes, which can be directed or undirected.
- **Degree**:
  - **In-Degree**: Number of edges coming into a node.
  - **Out-Degree**: Number of edges leaving a node.
- **Weighted Graph**: A graph where edges have weights representing costs, distances, or probabilities.

## Graph Algorithms
- **Graph Traversal**:
  - **Depth-First Search (DFS)**: Explores as far as possible along a branch before backtracking.
  - **Breadth-First Search (BFS)**: Explores all nodes at the current level before moving deeper.
- **Shortest Path**:
  - **Dijkstra's Algorithm**: Finds the shortest path in a weighted graph.
  - **A* Algorithm**: Optimized pathfinding using heuristics.
- **Minimum Spanning Tree (MST)**:
  - **Prim's Algorithm**: Builds an MST by starting from a node and adding the smallest edge.
  - **Kruskal's Algorithm**: Builds an MST by sorting edges and adding them incrementally.

## Advanced Concepts
- **Adjacency Matrix**: A square matrix used to represent a graph, where each element indicates the presence or absence of an edge.
- **Adjacency List**: A list representation of a graph, where each node has a list of its adjacent nodes.
- **Connectivity**:
  - **Connected Graph**: A graph where there is a path between every pair of nodes.
  - **Strongly Connected Components (SCCs)**: Subsets of a directed graph where every node is reachable from every other node within the subset.

## Applications in Search Engines
- **PageRank**: A graph-based algorithm that ranks web pages by analyzing the link structure of the web.
- **HITS Algorithm**: Identifies hubs (pages pointing to many authorities) and authorities (pages pointed to by many hubs).
- **Graph Traversal for Indexing**: Techniques like BFS and DFS are used to crawl and index web pages.
- **Weighted Graphs for Ranking**: Models relationships between pages and computes relevance scores based on link weights.

## Visualization
- **Graph Plotting**: Visualizing nodes and edges to understand relationships and structures.
- **Force-Directed Layouts**: A technique for graph visualization where edges act as springs and nodes repel each other.

This terminology provides the foundational lingo for discussing graph theory in the context of search engine algorithms and web structures.
