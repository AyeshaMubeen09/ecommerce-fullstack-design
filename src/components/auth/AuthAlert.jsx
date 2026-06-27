import {
  CheckCircle,
  XCircle,
  X,
} from "lucide-react";

function AuthAlert({
  type = "success",
  message,
  onClose,
}) {
  const isSuccess =
    type === "success";

  return (
    <div
      className={`
        flex items-center justify-between
        px-4 py-3 rounded-xl border mb-5
        ${
          isSuccess
            ? "bg-green-50 border-green-300 text-green-700"
            : "bg-red-50 border-red-300 text-red-700"
        }
      `}
    >
      <div className="flex items-center gap-3">
        {isSuccess ? (
          <CheckCircle size={20} />
        ) : (
          <XCircle size={20} />
        )}

        <span className="font-medium">
          {message}
        </span>
      </div>

      {onClose && (
        <button onClick={onClose}>
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default AuthAlert;