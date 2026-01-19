function Template() {

  return (
    <div className="min-h-screen bg-(--bg-app) text-(--text-primary)">
      {/* Header */}
      <header className="flex h-14 items-center justify-between border-b border-(--border-primary) bg-(--surface-card) px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-(--accent-primary) font-bold text-black">
            TF
          </div>
          <span className="text-lg font-semibold">TaskForge</span>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-6 text-sm text-(--text-secondary)">
          <button className="hover:text-(--text-primary)">
            Project Switcher
          </button>

          <button className="hover:text-(--text-primary)">
            Profile
          </button>
        </div>
      </header>

      {/* Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-(--border-primary) bg-(--bg-sidebar) p-4">
          <nav className="space-y-1 text-sm">
            <div className="mb-2 text-xs font-semibold uppercase text-(--text-muted)">
              Navigation
            </div>

            <a
              href="#"
              className="block rounded-md bg-(--surface-card) px-3 py-2 hover:bg-(--surface-hover)"
            >
              Board
            </a>

            <a
              href="#"
              className="block rounded-md px-3 py-2 hover:bg-(--surface-hover)"
            >
              Backlog
            </a>

            <a
              href="#"
              className="block rounded-md px-3 py-2 hover:bg-(--surface-hover)"
            >
              Reports
            </a>

            <a
              href="#"
              className="block rounded-md px-3 py-2 hover:bg-(--surface-hover)"
            >
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Canvas */}
        <main className="flex-1 bg-(--bg-canvas) p-6">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold">Project Board</h1>
            <p className="text-sm text-(--text-muted)">
              Track and manage your tasks efficiently
            </p>
          </div>

          {/* Empty State */}
          <div className="flex h-[60vh] items-center justify-center rounded-lg border border-dashed border-(--border-subtle) bg-(--surface-card)">
            <div className="text-center">
              <p className="text-sm text-(--text-muted)">
                No tasks yet
              </p>
              <p className="mt-1 text-xs text-(--text-muted)">
                Create a task to get started
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Template
