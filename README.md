# Sergei A. Nikolenko

I build ML and scientific software systems for molecular discovery: docking, molecular generation, ADMET/QSAR, structure prediction, chemical LLMs, spectra modeling, and agentic chemistry evaluation.

My work sits between research prototypes and usable infrastructure: models, benchmarks, reproducible pipelines, CLI tools, remote GPU/HPC workflows, and small product-grade tools that make molecular data easier to inspect and debug.

[Projects](https://sergeinikolenko.github.io/SergeiNikolenko/) · [LinkedIn](https://www.linkedin.com/in/nikolenko-sergei-/) · [ORCID](https://orcid.org/0000-0003-1150-9390) · [Kaggle](https://www.kaggle.com/nikolenkosergei)

<a href="https://www.github.com/SergeiNikolenko" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/followers/SergeiNikolenko?logo=github&style=for-the-badge&color=6366f1&labelColor=1c1917" /></a>

## What I Build

- **AI-driven drug discovery systems** — molecular docking, protein-ligand modeling, generative molecular design, ADMET/QSAR, retrosynthesis-aware evaluation, and virtual-screening workflows.
- **Scientific evaluation infrastructure** — benchmarks, run artifacts, leaderboards, report generation, pose validation, and reproducible model-comparison pipelines.
- **Chemical LLM and agentic systems** — evaluation ladders for reaction understanding, retrosynthesis, route planning, MS/MS tasks, tool-enabled reasoning, structured judging, and retry/validation guards.
- **Structure and docking workflows** — Matcha/GNINA/SMINA/Vina-style docking, pose filtering, ABCFold/Boltz/Chai/OpenFold/Protenix-style structure-prediction workflows, and remote GPU/HPC execution.
- **Research tooling and UX** — Python packages, CLI/TUI tools, macOS molecular previews, dashboards, automation, and developer workflows for computational chemistry teams.

## Selected Recent Work

| Project | Focus | Why it matters |
| --- | --- | --- |
| [Matcha](https://github.com/LigandPro/Matcha) | Molecular docking with multi-stage Riemannian flow matching | Public implementation of a docking pipeline that combines learned pose generation, physical-validity filtering, GNINA minimization/scoring, CLI inference, batching, and benchmark workflows. |
| [HEDGEHOG](https://github.com/LigandPro/hedgehog) | Molecular generation evaluation pipeline | Stage-based evaluation for generated molecules: preparation, descriptors, structural/medchem filters, retrosynthesis checks, docking, pose filtering, and final reports. |
| [SpectralixBenchmark](https://github.com/SergeiNikolenko/SpectralixBenchmark) | Agentic chemistry LLM evaluation | Benchmark and evaluation package for chemistry agents across reaction understanding, single-step retrosynthesis, route-level planning, MS/MS tasks, deterministic scoring, and rubric-based LLM judging. |
| [Bento](https://github.com/LigandPro/Bento) | Docking benchmarks and HPC workflows | Reproducible protein-ligand docking benchmark assets, ligand annotations, pocket-similarity workflows, raw prediction artifacts, tests, and SLURM/HPC execution notes. |
| [posecheck-fast](https://github.com/LigandPro/posecheck-fast) | High-throughput pose validation | Fast symmetry-corrected RMSD and lightweight PoseBusters-style filters for docking/model evaluation loops. |
| [Burette](https://github.com/SergeiNikolenko/Burette) | Finder-native molecular previews for macOS | Quick Look molecular previews with Mol* 3D, fast XYZ/CUBE rendering, external `xyzrender`, and RDKit grids for SDF/SMILES/CSV/TSV compound collections. |
| [ABCFold](https://github.com/SergeiNikolenko/ABCFold) | Structure-prediction workflow automation | Fork/workflow layer for running AlphaFold3, Boltz, Chai, OpenFold3, and Protenix-style backends with MSAs, templates, isolated environments, and reproducible outputs. |

## LigandPro / Applied Research Systems

At LigandPro, I lead computational chemistry work while staying hands-on in model development, data preparation, package architecture, evaluation, and infrastructure. Recent work spans docking runtimes, generative molecular design evaluation, ADMET benchmarking, structure-prediction workflows, shared run artifacts, result validation, monitoring, and GPU/HPC orchestration.

Some company/internal projects are not always public, so I describe them here as applied research systems rather than linking to unstable or private repositories:

- **LiTr** — transformer/RL workflows for molecular generation and optimization, including molecular tokenization, pretraining/sampling, reward design, diversity filters, and benchmarking.
- **ADMETForge** — matrix-driven ADMET benchmark orchestration around OpenADMET-style workflows: recipe generation, batch training, cross-validation, leaderboards, model comparison, and reproducible artifacts.
- **Operational docking/structure stack** — GNINA/SMINA/Vina/Open Babel/Matcha/ABCFold/Boltz-style toolchains, remote GPU runs, storage layouts, run summaries, and monitoring diagnostics.

## Stack

- **Cheminformatics and molecular modeling:** RDKit, BioPython, Open Babel, GNINA, SMINA, AutoDock Vina, PoseBusters-style validation, symmetry-corrected RMSD, AiZynthFinder, OpenMM/GROMACS, Mol*.
- **ML and deep learning:** PyTorch, PyTorch Geometric, Transformers, molecular language models, graph ML, flow matching, reinforcement learning for molecular optimization, scikit-learn, XGBoost, CatBoost, Optuna.
- **LLMs and agentic evaluation:** OpenAI-compatible APIs, PydanticAI-style workflows, LLM-as-judge, structured outputs, tool registries, validation/retry guards, benchmark matrices, rubric-based evaluation.
- **Scientific software and infrastructure:** Python packaging, uv, Docker, micromamba, SLURM, Bash, GitHub Actions, pytest, Ruff, reproducible configs, JSON/JSONL artifacts, CLI/TUI design, remote Linux/GPU operations.
- **Product/tooling:** Swift/macOS Quick Look extensions, JavaScript/TypeScript, WebKit/Mol* integration, dashboards, automation, and scientific UX.

## GitHub Stats

<a href="http://www.github.com/SergeiNikolenko"><img src="https://github-readme-stats.vercel.app/api?username=SergeiNikolenko&show_icons=true&count_private=true&title_color=a855f7&text_color=ffffff&icon_color=6366f1&bg_color=1c1917&hide_border=true" alt="SergeiNikolenko's GitHub stats" /></a>

## Get In Touch

I am open to research and engineering collaborations in medicinal chemistry, molecular modeling, drug discovery, chemical LLMs, molecular spectra, and ML infrastructure for scientific work.
