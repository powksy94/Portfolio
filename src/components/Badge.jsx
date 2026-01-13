import { skillIcons } from "../utils/skillIcons";

export default function Badge({ name, level }) {
  // Récupération de l’icône selon le langage ou framework
  const Icon = skillIcons[name];

  // Classe couleur selon le niveau
  const getLevelClass = () => {
    if (level < 40) return "progress-low";
    if (level < 60) return "progress-medium";
    return "progress-high";
  };

  return (
    <div className="w-full p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
      {/* Header avec icône */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          {Icon && (
            <Icon className="text-xl text-blue-500 dark:text-blue-400" />
          )}
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            {name}
          </span>
        </div>

        <span className="font-semibold text-gray-800 dark:text-gray-200">
          {level}%
        </span>
      </div>

      {/* Progress bar */}
      <progress
        value={level}
        max={100}
        className={`skill-progress w-full h-5 rounded-full appearance-none ${getLevelClass()}`}
      />
    </div>
  );
}
