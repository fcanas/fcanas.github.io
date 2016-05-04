% Side by Side Figures in LaTeX
% 2010-06-28

In another note to myself, here I describe how to put two figures side by side in LaTeX with the minipage environment. I know there are many other ways to do it, including the subfigure package, but I prefer minipage because each subfigure gets its own caption, labeling works like I want it to, and most of all the markup is easy to understand and extend. That is, it’s easy to see how you can put three or four figures together, and I prefer that to other alternatives with an opaque command.

```latex
\begin{figure}[htbp]
  \begin{minipage}[b]{0.5\linewidth}
    \centering
    \includegraphics[width=\linewidth]{figure01.eps}
    \caption{The caption for figure 1}
    \label{fig:chapter001_dist_001}
  \end{minipage}
  \hspace{0.5cm}
  \begin{minipage}[b]{0.5\linewidth}
    \centering
    \includegraphics[width=\linewidth]{figure02.eps}
    \caption{The caption for figure 2.}
    \label{fig:chapter001_reward_001}
  \end{minipage}
\end{figure}
```
