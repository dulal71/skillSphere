import { BiBook, BiRevision } from "react-icons/bi";
import { BsWatch } from "react-icons/bs";
import { LuFocus } from "react-icons/lu";
import './Tips.css'

const LearningTips = () => {
    return (
        <div className='max-w-7xl mx-auto my-14 bg-[#263B6A] grid md:grid-cols-3 lg:grid-cols-4 gap-3 py-28 px-4 rounded-lg'>
              <div className="p-5 rounded-xl border bg-white shadow-sm  animate-fadeUp">
    <div className="text-3xl mb-2"><BiBook></BiBook></div>
    <h2 className="font-semibold text-lg">Study Techniques</h2>
    <p className="text-sm text-gray-600 mt-1">
      Use active recall, notes, and smart learning methods.
    </p>
  </div>

  {/* Card 2 */}
  <div className="p-5 rounded-xl border bg-white shadow-sm animate-fadeUp">
    <div className="text-3xl mb-2"><BsWatch></BsWatch></div>
    <h2 className="font-semibold text-lg">Time Management</h2>
    <p className="text-sm text-gray-600 mt-1">
      Plan your day and focus on important tasks first.
    </p>
  </div>

  {/* Card 3 */}
  <div className="p-5 rounded-xl border bg-white shadow-sm animate-fadeUp">
    <div className="text-3xl mb-2"><LuFocus></LuFocus></div>
    <h2 className="font-semibold text-lg">Focus Tips</h2>
    <p className="text-sm text-gray-600 mt-1">
      Avoid distractions and improve concentration.
    </p>
  </div>

  {/* Card 4 */}
  <div className="p-5 rounded-xl border bg-white shadow-sm  animate-fadeUp">
    <div className="text-3xl mb-2"><BiRevision></BiRevision></div>
    <h2 className="font-semibold text-lg">Revision Strategy</h2>
    <p className="text-sm text-gray-600 mt-1">
      Revise weekly and review previous topics regularly.
    </p>
        </div>
        </div>
    );
};

export default LearningTips;