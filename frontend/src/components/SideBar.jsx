import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiColumns,
  FiList,
  FiGitBranch,
  FiFilter,
  FiChevronDown,
  FiPlus,
  FiSettings,
} from "react-icons/fi";

export default function ProjectSidebar({ project }) {
  const [collapsed, setCollapsed] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(true);

  return (
    <aside
      className={`flex min-h-screen flex-col border-r border-(--border-primary) bg-(--bg-sidebar) transition-all duration-200 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Project Header */}
      <div className="flex items-center justify-between border-b border-(--border-primary) px-3 py-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-(--accent-primary) text-sm font-bold text-(--text-primary)">
            {/* {project.key} */}
            TF
          </div>

          {!collapsed && (
            <span className="truncate text-sm font-semibold text-(--text-primary)">
              {/* {project.name} */}
              TaskForge
            </span>
          )}
        </div>

        <button
          onClick={() => setCollapsed((v) => !v)}
          className="rounded-md p-1 text-(--text-muted) hover:bg-(--surface-hover)"
        >
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 px-2 py-3">
        <SidebarItem icon={<FiColumns />} label="Board" collapsed={collapsed} />
        <SidebarItem icon={<FiList />} label="Backlog" collapsed={collapsed} />
        <SidebarItem
          icon={<FiGitBranch />}
          label="Flow Chart"
          collapsed={collapsed}
        />
      </nav>

      {/* Filters */}
      {!collapsed && (
        <div className="mt-2 border-t border-(--border-primary) px-2 pt-2">
          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-(--text-primary) hover:bg-(--surface-hover)"
          >
            <div className="flex items-center gap-2">
              <FiFilter size={16} />
              Filters
            </div>
            <FiChevronDown
              size={16}
              className={`transition-transform ${
                filtersOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {filtersOpen && (
            <div className="mt-2 space-y-3 px-2 text-sm">
              <FilterGroup title="Status">
                <FilterItem label="Todo" />
                <FilterItem label="In Progress" />
                <FilterItem label="Done" />
              </FilterGroup>

              <FilterGroup title="Priority">
                <FilterItem label="Low" />
                <FilterItem label="Medium" />
                <FilterItem label="High" />
              </FilterGroup>
            </div>
          )}
        </div>
      )}

      {/* Bottom Section */}
      <div className="mt-auto space-y-2 border-t border-(--border-primary) p-3">
        {/* Create Issue */}
        <button className="flex w-full items-center justify-center gap-2 rounded-md bg-(--accent-primary) px-3 py-2 text-sm font-medium text-(--text-primary) hover:bg-(--accent-hover)">
          <FiPlus size={16} />
          {!collapsed && "Create Issue"}
        </button>

        {/* Project Settings (visibility logic later) */}
        <button className="flex w-full items-center justify-center gap-2 rounded-md px-3 py-2 text-sm text-(--text-secondary) hover:bg-(--surface-hover) hover:text-(--text-primary)">
          <FiSettings size={16} />
          {!collapsed && "Project Settings"}
        </button>
      </div>
    </aside>
  );
}

/* ---------- Helpers ---------- */

function SidebarItem({ icon, label, collapsed }) {
  return (
    <button className="flex items-center gap-3 rounded-md px-3 py-2 text-(--text-secondary) hover:bg-(--surface-hover) hover:text-(--text-primary)">
      {icon}
      {!collapsed && label}
    </button>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <div className="mb-1 text-xs font-semibold uppercase text-(--text-muted)">
        {title}
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function FilterItem({ label }) {
  return (
    <button className="flex w-full items-center rounded-md px-2 py-1 text-(--text-secondary) hover:bg-(--surface-hover) hover:text-(--text-primary)">
      {label}
    </button>
  );
}
